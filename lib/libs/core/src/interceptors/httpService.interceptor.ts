import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor,
	UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { Request } from 'express';

import { KeycloakConfigService } from '@modules/keycloak';
import { ERRORS_DICTIONARY } from '@shared';

@Injectable()
export class HttpServiceInterceptor implements NestInterceptor {
	constructor(private keycloakService: KeycloakConfigService) {}
	private extractTokenFromHeader(request: Request): string | undefined {
		const [type, token] = request.headers.authorization?.split(' ') ?? [];
		return type === 'Bearer' ? token : undefined;
	}

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const request = context.switchToHttp().getRequest();
		const token = this.extractTokenFromHeader(request);

		if (!token) {
			throw new UnauthorizedException({
				message: 'token not found',
				errorCode: ERRORS_DICTIONARY.AUTH_UNAUTHORIZED_EXCEPTION,
			});
		}

		this.keycloakService.kcAdminClient.setAccessToken(token);

		return next.handle().pipe();
	}
}
