import { BaseResponse } from '../../common.type';
import { IApplicationController } from './controller';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace IApplicationCategoryController {
	export interface ICreate {
		name: string;
		description?: string;
		icon?: string;
		isActive?: boolean;
	}

	export interface IUpdate extends Partial<ICreate> {}

	export interface IResponse extends BaseResponse {
		name: string;
		description?: string | null;
		isActive?: boolean;
		icon?: string | null;
		controllers?: IApplicationController.IResponse[] | null;
	}
}
