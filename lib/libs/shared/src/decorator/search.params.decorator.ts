import {
	BadRequestException,
	createParamDecorator,
	ExecutionContext,
} from '@nestjs/common';
import { Request } from 'express';
import { ERRORS_DICTIONARY } from '../const';
import { ISearch } from '../types';

export const SearchParams = createParamDecorator(
	(validParams, ctx: ExecutionContext): ISearch => {
		const req: Request = ctx.switchToHttp().getRequest();
		const search = req.query.search as string;

		// check if the valid params sent is an array
		if (typeof validParams != 'object') {
			throw new BadRequestException({
				message: 'Invalid search parameter',
				errorCode: ERRORS_DICTIONARY.SEARCH_PARAMS_INVALID_EXCEPTION,
			});
		}

		return {
			s: search,
			properties: validParams,
		};
	},
);
