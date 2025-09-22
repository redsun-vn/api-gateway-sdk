import { tags } from 'typia';
import { IApplicationMain } from './main';
import { IApplicationController } from './controller';
import { IApplicationPlan } from './application-plan';
import { BaseResponse } from '../../common.type';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace IApplication {
	export interface ICreate {
		name: string;
		slug: string;
		version?: string;
		description?: string;
		content?: string;
		isActive?: boolean;
		isInMaintenance?: boolean;
		price?: number;
		salePrice?: number;
		icon?: string;
		previewId?: number & tags.Type<'uint64'>;
		appDependencies?: number[] | null;
		mainId: number & tags.Type<'uint64'>;
		controllerIds?: number[] | null;
	}

	export interface IUpdate extends Partial<ICreate> {}

	export interface IResponse extends BaseResponse {
		name: string;
		slug: string;
		version?: string | null;
		description?: string | null;
		content?: string | null;
		isActive: boolean;
		isInMaintenance: boolean;
		price?: number | string | null;
		salePrice?: number | string | null;
		icon?: string | null;
		previewId?: number | string | null;
		appDependencies?: string[] | null;
		mainId?: number | string | null;
		main?: IApplicationMain.IResponse | null;
		controllers?: IApplicationController.IResponse[] | null;
		appPlans?: IApplicationPlan.IResponse[] | null;
	}
}
