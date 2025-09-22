import {
	BadRequestException,
	createParamDecorator,
	ExecutionContext,
} from '@nestjs/common';
import { Request } from 'express';
import { FilterRule, ERRORS_DICTIONARY } from '../const';
import { IFiltering } from '../types';

export const FilteringParams = createParamDecorator(
	(data, ctx: ExecutionContext): IFiltering | null => {
		const req: Request = ctx.switchToHttp().getRequest();
		const filter = req.query.filter as string;
		if (!filter) return null;

		// check if the valid params sent is an array
		if (typeof data != 'object')
			throw new BadRequestException({
				message: 'Invalid filter parameter',
				errorCode: ERRORS_DICTIONARY.FILTERS_PARAMS_INVALID_EXCEPTION,
			});

		// validate the format of the filter, if the rule is 'isnull' or 'isnotnull' it don't need to have a value
		if (
			!filter.match(
				/.*^[a-zA-Z0-9_]+:(eq|neq|gt|gte|lt|lte|like|nlike|in|nin):[a-zA-Z0-9_,]+.*$/,
			) &&
			!filter.match(/^[a-zA-Z0-9_]+:(isnull|isnotnull)$/)
		) {
			throw new BadRequestException({
				message: 'Invalid filter parameter',
				errorCode: ERRORS_DICTIONARY.FILTERS_PARAMS_INVALID_EXCEPTION,
			});
		}

		// extract the parameters and validate if the rule and the property are valid
		const [property, rule, value] = filter.split(':');
		if (!data.includes(property))
			throw new BadRequestException(`Invalid filter property: ${property}`);
		if (!Object.values(FilterRule).includes(rule as FilterRule))
			throw new BadRequestException({
				message: `Invalid filter rule: ${rule}`,
				errorCode: ERRORS_DICTIONARY.FILTERS_PARAMS_INVALID_EXCEPTION,
			});

		return { property, rule, value };
	},
);
