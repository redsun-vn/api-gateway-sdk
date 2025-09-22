import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ERRORS_DICTIONARY } from '../const';
import { PERMISSION_KEY } from '../decorator';
import { LoggerService } from '@logger';
import { CacheService } from '@modules/cache/cache.service';
import { getKeyCacheStaffByShop, IStaff } from '@shared';

@Injectable()
export class HasPermissionGuard implements CanActivate {
	constructor(
		private reflector: Reflector,
		private readonly cacheService: CacheService,
		private readonly logger: LoggerService,
	) {
		this.logger.setContext(HasPermissionGuard.name);
	}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const req = context.switchToHttp().getRequest();
		const user = req.user;

		if (!user) {
			throw this.createForbiddenException(
				'User not found',
				ERRORS_DICTIONARY.AUTH_UNAUTHORIZED_EXCEPTION,
			);
		}

		const { shopId, staffId } = this.getShopAndStaffIds(req);
		const staff = await this.getStaffFromCache(staffId, shopId);
		const permissionsOfStaff = this.getStaffPermissions(staff);

		const requiredPermission = this.reflector.getAllAndOverride<string[]>(
			PERMISSION_KEY,
			[context.getHandler(), context.getClass()],
		);

		if (!requiredPermission) {
			return true;
		}

		try {
			this.logger.log(`Permissions: [ ${permissionsOfStaff.join(', ')} ]`);
			if (permissionsOfStaff.includes('manage')) {
				return true;
			}

			const hasValidPermission = requiredPermission.some((pms) =>
				permissionsOfStaff.includes(pms),
			);

			if (!hasValidPermission) {
				throw this.createForbiddenException(
					'You do not have the necessary permissions.',
					ERRORS_DICTIONARY.AUTH_STAFF_NOT_PERMISSION_EXCEPTION,
				);
			}

			return true;
		} catch (error: any) {
			this.logger.error(error?.message, error as string);
			throw this.createForbiddenException(
				error?.message,
				error?.response?.errorCode ||
					error?.errorCode ||
					ERRORS_DICTIONARY.GENERIC_ARGUMENT_INVALID,
				error?.status,
			);
		}
	}

	private getShopAndStaffIds(req: any): { shopId: string; staffId: string } {
		const shopId = req?.cookies?.shop_id || req?.headers?.['shop-id'];
		const staffId = req?.cookies?.staff_id || req?.headers?.['staff-id'];
		return { shopId, staffId };
	}

	private async getStaffFromCache(
		staffId: string,
		shopId: string,
	): Promise<IStaff.IStaffResponse> {
		const keyCacheStaffByShop = getKeyCacheStaffByShop(staffId, shopId);
		const dataCache = await this.cacheService.get(keyCacheStaffByShop);
		if (!dataCache) {
			throw this.createForbiddenException(
				'User not found',
				ERRORS_DICTIONARY.AUTH_UNAUTHORIZED_EXCEPTION,
			);
		}
		return JSON.parse(dataCache as string) as IStaff.IStaffResponse;
	}

	private getStaffPermissions(staff: IStaff.IStaffResponse): string[] {
		let permissions = staff.permission || [];
		if (staff.groups) {
			const groupPermissions = staff.groups.flatMap(
				(group) => group.permission,
			);
			permissions = [...permissions, ...groupPermissions];
		}
		return permissions;
	}

	private createForbiddenException(
		message: string,
		errorCode: string,
		statusCode?: number,
	): ForbiddenException {
		return new ForbiddenException({
			message,
			errorCode,
			statusCode,
		});
	}
}
