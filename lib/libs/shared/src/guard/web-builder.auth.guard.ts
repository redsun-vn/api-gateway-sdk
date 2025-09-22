import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { KeycloakMultiService } from '@modules/keycloak-multi/keycloak-multi.service';
import { IWebsite } from '@shared';
import { parseToken } from '../utils/parseToken';
import { CacheService } from '@modules/cache/cache.service';

@Injectable()
export class WebBuilderAuthGuard implements CanActivate {
	private readonly TOKEN_CACHE_TTL = 5 * 60; // 5 minutes
	private readonly USER_CACHE_TTL = 30 * 60; // 30 minutes

	constructor(
		private configService: ConfigService,
		private readonly keycloakMultiService: KeycloakMultiService,
		private readonly cacheService: CacheService,
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();
		const token = this.extractTokenFromHeader(request);
		if (!token) {
			throw new UnauthorizedException('Token not provided');
		}

		const website: IWebsite.IResponse = request?.currentWebsite;
		if (!website) {
			throw new UnauthorizedException('Website not found');
		}

		try {
			// Parse token to get user info
			const tokenUserParse = parseToken(token);
			if (!tokenUserParse || !tokenUserParse?.sub) {
				console.log('Invalid token format', token, tokenUserParse);
				throw new UnauthorizedException('Invalid token format');
			}

			// Check token validation in cache
			const tokenCacheKey = `cache:token:${website.domain}:${tokenUserParse.sub}`;
			const cachedTokenValidation = await this.cacheService.get(tokenCacheKey);

			if (cachedTokenValidation) {
				// If token is cached and valid, attach user info and return
				request.user = tokenUserParse;
				return true;
			}

			// Validate token with Keycloak
			const isValid = await this.keycloakMultiService.validateToken(
				website.domain,
				token,
			);

			if (!isValid) {
				throw new UnauthorizedException('Invalid token');
			}

			// Cache token validation result
			await this.cacheService.set(
				tokenCacheKey,
				true,
				this.TOKEN_CACHE_TTL * 1000,
			);

			// Cache user info
			const userCacheKey = `cache:user:${website.domain}:${tokenUserParse.sub}`;
			await this.cacheService.set(
				userCacheKey,
				tokenUserParse,
				this.USER_CACHE_TTL * 1000,
			);

			request.user = tokenUserParse;
			return true;
		} catch (error) {
			if (error instanceof UnauthorizedException) {
				throw error;
			}
			throw new UnauthorizedException('Token validation failed');
		}
	}

	private extractTokenFromHeader(request: Request): string | undefined {
		const [type, token] = request.headers.authorization?.split(' ') ?? [];
		const tokenType = this.configService.get('WEB_BUILDER_JWT_TYPE', 'Bearer');

		return type === tokenType ? token : undefined;
	}
}
