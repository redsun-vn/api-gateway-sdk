import {
	BadRequestException,
	createParamDecorator,
	ExecutionContext,
} from '@nestjs/common';
import { Request } from 'express';
import { ISorting } from '../types';
import { ERRORS_DICTIONARY } from '../const';

export const SortingParams = createParamDecorator(
	(validParams, ctx: ExecutionContext): ISorting => {
		const req: Request = ctx.switchToHttp().getRequest();
		let sort = req.query.sort as string;
		if (!sort) {
			sort = 'createdAt:desc';
			const [property, direction] = sort.split(':');
			return { property, direction };
		}

		// check if the valid params sent is an array
		if (typeof validParams != 'object')
			throw new BadRequestException({
				message: 'Invalid sort parameter',
				errorCode: ERRORS_DICTIONARY.SORTING_PARAMS_INVALID_EXCEPTION,
			});

		// check the format of the sort query param
		const sortPattern = /^([a-zA-Z0-9]+):(asc|desc)$/;
		if (!sort.match(sortPattern))
			throw new BadRequestException({
				message: 'Invalid sort parameter',
				errorCode: ERRORS_DICTIONARY.SORTING_PARAMS_INVALID_EXCEPTION,
			});

		// extract the property name and direction and check if they are valid
		const [property, direction] = sort.split(':');
		if (!validParams.includes(property))
			throw new BadRequestException({
				message: `Invalid sort property: ${property}`,
				errorCode: ERRORS_DICTIONARY.SORTING_PARAMS_INVALID_EXCEPTION,
			});

		return { property, direction };
	},
);
