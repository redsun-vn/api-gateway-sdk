import { tags } from 'typia';
import { IApplicationController } from './controller';
import { IApplication } from './application';
import { BaseResponse } from '../../common.type';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace IApplicationPlan {
	export enum APP_PLAN_UNIT_ENUM {
		DAY = 'day',
		MONTH = 'month',
		YEAR = 'year',
		WEEK = 'week',
	}

	export interface ICreate {
		name: string;
		description?: string;
		isActive?: boolean;
		price?: number;
		value: number;
		unit: string & APP_PLAN_UNIT_ENUM;
		salePrice?: number;
		appId: number & tags.Type<'uint64'>;
		controllerIds: number[];
	}

	export interface IUpdate extends Partial<ICreate> {}

	export interface IResponse extends BaseResponse {
		name: string;
		description?: string | null;
		isActive?: boolean;
		price?: number | string | null;
		value?: number | string | null;
		unit?: string | null;
		salePrice?: number | string | null;
		appId?: number | string | null;
		app?: IApplication.IResponse | null;
		controllers?: IApplicationController.IResponse[] | null;
	}
}
