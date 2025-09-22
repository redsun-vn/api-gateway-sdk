import {
	BadRequestException,
	createParamDecorator,
	ExecutionContext,
} from '@nestjs/common';
import { ERRORS_DICTIONARY } from '../const';

export const GetShop = createParamDecorator(
	(data: unknown, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest();
		const shopId = request?.cookies?.shop_id || request?.headers?.['shop-id'];
		if (!shopId) {
			throw new BadRequestException({
				message: 'shop not found',
				errorCode: ERRORS_DICTIONARY.SHOP_NOT_FOUND,
				statusCode: 403,
			});
		}
		return shopId;
	},
);
