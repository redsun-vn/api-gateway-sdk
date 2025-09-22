import {
	BadRequestException,
	createParamDecorator,
	ExecutionContext,
} from '@nestjs/common';
import { Request } from 'express';
import { IPaginationOptions } from '../types';

export const PaginationParams = createParamDecorator(
	(data, ctx: ExecutionContext): IPaginationOptions => {
		const req: Request = ctx.switchToHttp().getRequest();
		const page = parseInt(req.query.page as string) || 1;
		const limit = parseInt(req.query.limit as string) || 10;

		// check if page and limit are valid
		if (isNaN(page) || page < 0 || isNaN(limit) || limit < 0) {
			throw new BadRequestException('Invalid pagination params');
		}
		// do not allow to fetch large slices of the dataset
		if (limit > 100) {
			throw new BadRequestException(
				'Invalid pagination params: Max limit is 100',
			);
		}

		return { page, limit };
	},
);
