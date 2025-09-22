import {
	Injectable,
	NestMiddleware,
	UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { KeycloakMultiService } from '@modules/keycloak-multi/keycloak-multi.service';
import { DOMAIN_HEADER_KEY, ERRORS_DICTIONARY } from '../const';

@Injectable()
export class DomainMiddleware implements NestMiddleware {
	constructor(private readonly keycloakMultiService: KeycloakMultiService) {}

	async use(req: Request, res: Response, next: NextFunction) {
		const domain =
			req?.cookies?.[DOMAIN_HEADER_KEY] || req?.headers?.[DOMAIN_HEADER_KEY];

		try {
			const website = await this.keycloakMultiService.findOneWebsiteByDomain(
				domain as string,
			);

			if (!website) {
				throw new UnauthorizedException({
					message: 'Invalid domain',
					errorCode: ERRORS_DICTIONARY.WEBSITE_NOT_FOUND_EXCEPTION,
				});
			}

			const realm = await this.keycloakMultiService.getRealm(
				website.domain as string,
			);
			if (!realm) {
				throw new UnauthorizedException({
					message: 'Invalid domain',
					errorCode: ERRORS_DICTIONARY.KEYCLOAK_MULTIPLE_REALM_NOT_FOUND,
				});
			}

			req['domain'] = domain;
			req['currentWebsite'] = website;
			next();
		} catch (error) {
			throw new UnauthorizedException({
				message: 'Invalid domain',
				errorCode: ERRORS_DICTIONARY.KEYCLOAK_MULTIPLE_REALM_NOT_FOUND,
			});
		}
	}
}
