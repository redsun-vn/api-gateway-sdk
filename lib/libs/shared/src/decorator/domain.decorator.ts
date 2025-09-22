import {
	BadRequestException,
	createParamDecorator,
	ExecutionContext,
} from '@nestjs/common';
import { ERRORS_DICTIONARY, DOMAIN_HEADER_KEY } from '../const';

export const GetDomain = createParamDecorator(
	(data: unknown, ctx: ExecutionContext) => {
		const req = ctx.switchToHttp().getRequest();
		const domain =
			req?.cookies?.[DOMAIN_HEADER_KEY] || req?.headers?.[DOMAIN_HEADER_KEY];

		if (!domain) {
			throw new BadRequestException({
				message: 'domain not found',
				errorCode: ERRORS_DICTIONARY.KEYCLOAK_MULTIPLE_REALM_NOT_FOUND,
				statusCode: 403,
			});
		}
		return domain;
	},
);
