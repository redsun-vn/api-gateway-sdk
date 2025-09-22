import {
	BadRequestException,
	createParamDecorator,
	ExecutionContext,
} from '@nestjs/common';
import { ERRORS_DICTIONARY } from '../const';

export const GetStaff = createParamDecorator(
	(data: unknown, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest();

		const staffId =
			request?.cookies?.staff_id || request?.headers?.['staff-id'];
		if (!staffId) {
			throw new BadRequestException({
				message: 'staff not found',
				errorCode: ERRORS_DICTIONARY.STAFF_NOT_FOUND,
				statusCode: 403,
			});
		}

		return staffId;
	},
);
