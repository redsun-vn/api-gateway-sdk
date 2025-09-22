import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { ADMIN_VERIFY_TOKEN_TOPIC } from '@configs/topics';
import { IAdminUser, IResponse } from '../types';
import { lastValueFrom } from 'rxjs';
import { GlobalService } from '@modules/global/global.service';
// import { CacheService } from '@modules/cache/cache.service';
// import { parseToken } from '../utils/parseToken';

@Injectable()
export class AdminAuthGuard implements CanActivate {
	private readonly TOKEN_CACHE_TTL = 5 * 60; // 5 minutes
	constructor(
		private configService: ConfigService,
		private readonly globalService: GlobalService, // private readonly cacheService: CacheService,
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();
		const token = this.extractTokenFromHeader(request);
		if (!token) {
			throw new UnauthorizedException();
		}

		// const tokenUserParse = parseToken(token);
		// if (!tokenUserParse || !tokenUserParse?.userId) {
		// 	throw new UnauthorizedException('Invalid token');
		// }

		// const tokenCacheKey = `cache:tokenAdmin:${tokenUserParse.userId}`;
		// const cachedTokenValidation = await this.cacheService.get(tokenCacheKey);
		// if (cachedTokenValidation) {
		// 	request['user'] = JSON.parse(cachedTokenValidation as string);
		// 	return true;
		// }

		// Validate token
		try {
			const user: IResponse<IAdminUser.IResponseWithoutSecret> =
				await lastValueFrom(
					this.globalService
						.getAdminClient()
						.send(ADMIN_VERIFY_TOKEN_TOPIC, JSON.stringify({ token })),
				);
			// await this.cacheService.set(
			// 	tokenCacheKey,
			// 	JSON.stringify(user.data),
			// 	this.TOKEN_CACHE_TTL,
			// );
			request['user'] = user.data;
		} catch {
			throw new UnauthorizedException();
		}
		return true;
	}

	private extractTokenFromHeader(request: Request): string | undefined {
		const [type, token] = request.headers.authorization?.split(' ') ?? [];
		const tokenType = this.configService.get('ADMIN_JWT_TYPE');

		return type === tokenType ? token : undefined;
	}
}
