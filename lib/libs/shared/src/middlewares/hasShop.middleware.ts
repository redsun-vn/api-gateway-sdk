import {
	ForbiddenException,
	Injectable,
	NestMiddleware,
	UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ERRORS_DICTIONARY } from '../const';
import { CacheService } from '@modules/cache/cache.service';
import { IStaff, IShop, ELASTIC_INDEX } from '@shared';
// import { getKeyCacheUserDeviceByShop, parseToken } from '../utils';
import { parseToken } from '../utils';
import { StaffResourceService } from '@modules/shop-service/staff-resource/shop.staff.service';
import { ElasticService } from '@modules/elastic';
@Injectable()
export class HasShopMiddleware implements NestMiddleware {
	constructor(
		private readonly cacheService: CacheService,
		private readonly staffService: StaffResourceService,
		private readonly elasticService: ElasticService,
	) {}

	async getShop(id: string | number): Promise<IShop.IShopResponse> {
		try {
			const cacheKey = `cache:ShopEntity:${id}`;
			const dataCache = await this.cacheService.get(cacheKey);
			if (dataCache)
				return JSON.parse(dataCache as string) as IShop.IShopResponse;

			const shop = await this.elasticService
				.setIndex(ELASTIC_INDEX.SHOP)
				.getById(String(id));
			if (!shop) {
				throw new ForbiddenException({
					message: 'shop by elastic not found',
					errorCode: ERRORS_DICTIONARY.SHOP_NOT_FOUND,
				});
			}
			if (!shop.active) {
				throw new ForbiddenException({
					message: 'shop inactive',
					errorCode: ERRORS_DICTIONARY.SHOP_NOT_FOUND,
				});
			}

			return shop;
		} catch (error) {
			throw new ForbiddenException({
				message: 'shop not found: HasShopMiddleware',
				errorCode: ERRORS_DICTIONARY.SHOP_NOT_FOUND,
			});
		}
	}

	private async getStaff(
		staffId: string,
		shopId: string,
	): Promise<IStaff.IStaffResponse> {
		return await this.staffService.findStaffByShopElastic(staffId, shopId);
	}

	private extractTokenFromHeader(request: Request): string | undefined {
		const [type, token] = request.headers.authorization?.split(' ') ?? [];
		return type === 'Bearer' ? token : undefined;
	}

	async use(req: Request, _res: Response, next: NextFunction) {
		const shopId = req?.cookies?.shop_id || req?.headers?.['shop-id'];
		const staffId = req?.cookies?.staff_id || req?.headers?.['staff-id'];
		const deviceId = req?.cookies?.device_id || req?.headers?.['device-id'];

		if (!shopId) {
			throw new ForbiddenException({
				message: 'Shop header not found',
				errorCode: ERRORS_DICTIONARY.AUTH_SHOP_NOT_FOUND_EXCEPTION,
			});
		}
		if (!staffId) {
			throw new ForbiddenException({
				message: 'Staff header not found',
				errorCode: ERRORS_DICTIONARY.AUTH_STAFF_NOT_FOUND_EXCEPTION,
			});
		}
		if (!deviceId) {
			throw new ForbiddenException({
				message: 'Device id header not found',
				errorCode: ERRORS_DICTIONARY.AUTH_DEVICE_ID_IS_REQUIRED_EXCEPTION,
			});
		}

		await this.getShop(shopId);
		const staff = await this.getStaff(staffId, shopId);

		const jwt = this.extractTokenFromHeader(req);
		if (!jwt) {
			throw new UnauthorizedException({
				message: 'Empty JWT, unauthorized',
			});
		}

		const tokenUserParse = parseToken(jwt);

		if (!tokenUserParse || !tokenUserParse?.sub) {
			throw new UnauthorizedException({
				message: 'JWT invalid data',
			});
		}

		// Kiểm tra staff có đúng là user token đang sử dụng hay không
		const userId = tokenUserParse.sub;
		if (String(staff.user_id) !== String(userId)) {
			console.log('staff.user_id', staff);
			console.log('userId', userId);

			throw new ForbiddenException({
				message: "The JWT token does not match the staff's information",
				errorCode: ERRORS_DICTIONARY.AUTH_STAFF_NOT_MATCH_USER_TOKEN_EXCEPTION,
			});
		}

		if (String(staff.shop_id) !== String(shopId)) {
			console.log('staff.shop_id', staff.shop_id);
			console.log('shopId', shopId);

			throw new ForbiddenException({
				message: "The JWT token does not match the shop's information",
				errorCode: ERRORS_DICTIONARY.AUTH_STAFF_NOT_MATCH_USER_TOKEN_EXCEPTION,
			});
		}

		next();
	}
}
