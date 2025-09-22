import { ADMIN_API_KEY_CHECK_TOPIC } from '@configs/topics';
import { ForbiddenException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { lastValueFrom } from 'rxjs';
import { ERRORS_DICTIONARY } from '../const';
import { CacheService } from '@modules/cache/cache.service';
import { GlobalService } from '@modules/global/global.service';
import { IPNVNPayQRCodeException, IPNVNPayWebException } from '../exception';

@Injectable()
export class AdminAPIKeyMiddleware implements NestMiddleware {
	constructor(
		private readonly globalService: GlobalService,
		private readonly cacheService: CacheService,
	) {}
	private extractApiKeyFromHeader(request: Request): string | undefined {
		const [type, apiKey] = request.headers.authorization
			? request.headers.authorization?.split(' ')
			: ['Apikey', request.query.apiKey as string];
		return type === 'Apikey' ? apiKey : undefined;
	}

	private async validIPNVNPay(req: Request): Promise<boolean> {
		const apiKey = this.extractApiKeyFromHeader(req) as string;

		if (!apiKey) {
			return false;
		}

		const cache: any = await this.cacheService.get(
			`cache:AdminApiKeyEntity:${apiKey}`,
		);
		try {
			if (!cache) {
				await lastValueFrom(
					this.globalService
						.getAdminClient()
						.send(
							ADMIN_API_KEY_CHECK_TOPIC,
							JSON.stringify({ api_key: apiKey }),
						),
				);
			}
			return true;
		} catch (error) {
			return false;
		}
	}

	private async validRequestWebhook(req: Request) {
		const apiKey = this.extractApiKeyFromHeader(req) as string;

		if (!apiKey) {
			return false;
		}

		const cache: any = await this.cacheService.get(
			`cache:AdminApiKeyEntity:${apiKey}`,
		);

		try {
			if (!cache) {
				await lastValueFrom(
					this.globalService
						.getAdminClient()
						.send(
							ADMIN_API_KEY_CHECK_TOPIC,
							JSON.stringify({ api_key: apiKey }),
						),
				);
			}
			return true;
		} catch (error) {
			return false;
		}
	}

	async use(req: Request, _res: Response, next: NextFunction) {
		const url = req?.url;
		let isValid = false;

		// Check if the URL includes 'ipn' or 'vnpay'
		if (url && url.includes('ipn') && url.includes('vnpay')) {
			isValid = await this.validIPNVNPay(req);
		} else {
			isValid = await this.validRequestWebhook(req);
		}

		if (!isValid) {
			if (url && url.includes('ipn') && url.includes('vnpay')) {
				throw new IPNVNPayQRCodeException();
			} else {
				throw new ForbiddenException({
					message: 'API key is missing or invalid for the environment',
					errorCode: ERRORS_DICTIONARY.API_KEY_EXCEPTION,
				});
			}
		}

		if (!isValid) {
			if (url && url.includes('ipn') && url.includes('vnpay-ctt')) {
				throw new IPNVNPayWebException();
			} else {
				throw new ForbiddenException({
					message: 'API key is missing or invalid for the environment',
					errorCode: ERRORS_DICTIONARY.API_KEY_EXCEPTION,
				});
			}
		}

		next();
	}
}
