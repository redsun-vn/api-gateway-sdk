import {
	CanActivate,
	ExecutionContext,
	Inject,
	Injectable,
	Logger,
	UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as KeycloakConnect from 'keycloak-connect';
import {
	KEYCLOAK_CONNECT_OPTIONS,
	KEYCLOAK_COOKIE_DEFAULT,
	KEYCLOAK_INSTANCE,
	KEYCLOAK_LOGGER,
	KEYCLOAK_MULTITENANT_SERVICE,
	KeycloakConnectConfig,
	META_SKIP_AUTH,
	META_UNPROTECTED,
	TokenValidation,
} from 'nest-keycloak-connect';
import { extractRequest, useKeycloak } from './util';
import { KeycloakMultiTenantService } from './service/keycloak-multitenant.service';
import { CacheService } from '@modules/cache/cache.service';
import { parseToken } from '../../utils';

/**
 * An authentication guard. Will return a 401 unauthorized when it is unable to
 * verify the JWT token or Bearer header is missing.
 */
@Injectable()
export class AuthGuardCustom implements CanActivate {
	constructor(
		@Inject(KEYCLOAK_INSTANCE)
		private singleTenant: KeycloakConnect.Keycloak,
		@Inject(KEYCLOAK_CONNECT_OPTIONS)
		private keycloakOpts: KeycloakConnectConfig,
		@Inject(KEYCLOAK_LOGGER)
		private logger: Logger,
		@Inject(KEYCLOAK_MULTITENANT_SERVICE)
		private multiTenant: KeycloakMultiTenantService,
		private readonly reflector: Reflector,
		private readonly cacheService: CacheService,
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const isUnprotected = this.reflector.getAllAndOverride<boolean>(
			META_UNPROTECTED,
			[context.getClass(), context.getHandler()],
		);
		const skipAuth = this.reflector.getAllAndOverride<boolean>(META_SKIP_AUTH, [
			context.getClass(),
			context.getHandler(),
		]);

		if (isUnprotected && skipAuth) {
			return true;
		}

		const [request] = extractRequest(context);

		if (!request) {
			return true;
		}

		const jwt =
			this.extractJwtFromCookie(request.cookies) ??
			this.extractJwt(request.headers);

		if (jwt === null || jwt === undefined) {
			if (!skipAuth && isUnprotected) {
				this.logger.verbose(
					'Empty JWT, skipAuth disabled, and a publicly marked route, allowed for fallback',
				);
				return true;
			}
			this.logger.verbose('Empty JWT, unauthorized');
			throw new UnauthorizedException('Empty JWT, unauthorized');
		}

		const tokenUserParse = parseToken(jwt);

		if (!tokenUserParse?.sub) {
			throw new UnauthorizedException({
				message: 'JWT invalid data',
			});
		}

		const sessionState = tokenUserParse.session_state;
		const cacheKey = `cache:auth:${sessionState}`;

		this.logger.verbose(`Checking cache for key: ${cacheKey}`);

		const cacheResult = await this.cacheService.get(cacheKey);

		if (cacheResult) {
			request.user = tokenUserParse;
			request.accessTokenJWT = jwt;

			this.logger.verbose(
				`User JWT passed guard sessionState cache: ${sessionState}`,
			);
			return true;
		}

		this.logger.verbose(`Cache miss for keys: ${cacheKey}`);

		const keycloak = await useKeycloak(
			request,
			jwt,
			this.singleTenant,
			this.multiTenant,
			this.keycloakOpts,
		);
		const isValidToken = await this.validateToken(keycloak, jwt);

		if (isValidToken) {
			request.user = tokenUserParse;
			request.accessTokenJWT = jwt;

			this.logger.verbose(
				`Authenticated User: ${JSON.stringify(request.user)}`,
			);

			const ttlMs = 30 * 60 * 1000;
			await Promise.all([this.cacheService.set(cacheKey, true, ttlMs)]);

			this.logger.verbose(
				`Cache set for keys: ${cacheKey} with TTL: ${ttlMs}ms (30 phút)`,
			);
			return true;
		}

		throw new UnauthorizedException('Invalid token last step');
	}

	private async validateToken(keycloak: KeycloakConnect.Keycloak, jwt: any) {
		const tokenValidation =
			this.keycloakOpts.tokenValidation || TokenValidation.ONLINE;

		if (tokenValidation === TokenValidation.NONE) {
			return true;
		}

		const gm = keycloak.grantManager;

		try {
			const grant = await gm.createGrant({ access_token: jwt });
			const token = grant.access_token;

			this.logger.verbose(
				`Using token validation method: ${tokenValidation.toUpperCase()}`,
			);

			let result: boolean | KeycloakConnect.Token;

			switch (tokenValidation) {
				case TokenValidation.ONLINE:
					result = await gm.validateAccessToken(token as any);
					return result === token;
				case TokenValidation.OFFLINE:
					result = await gm.validateToken(token as any, 'Bearer');
					return result === token;
				default:
					this.logger.warn(`Unknown validation method: ${tokenValidation}`);
					return false;
			}
		} catch (ex) {
			this.logger.warn(`Cannot validate access token: ${ex}`);
			return false;
		}
	}

	private extractJwt(headers: { [key: string]: string }) {
		const authHeader = headers?.authorization;

		if (!authHeader) {
			this.logger.verbose(`No authorization header`);
			return null;
		}

		const auth = authHeader.split(' ');

		if (auth[0]?.toLowerCase() !== 'bearer' || !auth[1]) {
			this.logger.verbose(`Invalid bearer header format`);
			return null;
		}

		return auth[1];
	}

	private extractJwtFromCookie(cookies: { [key: string]: string }) {
		if (!cookies) {
			return null;
		}

		const cookieKey = this.keycloakOpts.cookieKey || KEYCLOAK_COOKIE_DEFAULT;
		return cookies[cookieKey] || null;
	}
}
