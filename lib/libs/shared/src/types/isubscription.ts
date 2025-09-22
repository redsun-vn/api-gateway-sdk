/* eslint-disable @typescript-eslint/no-namespace */
// import { tags } from 'typia';
import { tags } from 'typia';
import { BaseResponse } from './common.type';
import { IPackagePlan } from './ipackage-plan';

export namespace ISubscription {
	export interface ICreate {
		targetValue?: number;
		package_id: string;
		packageAdditionIds?: number[];
		appPlanIds?: number[];
		paymentCode?: string;
		email?: string & tags.Format<'email'>;
		phone?: string;
		address?: string;
	}
	export interface IUpdate {
		active?: boolean;
	}

	export interface IShopUpdate {
		paymentCode?: string;
		email?: string & tags.Format<'email'>;
		phone?: string;
		address?: string;
	}

	export type IStats = {
		branchTotalRemain: number;
		deviceRemain: number;
		daysRemain: number;
		userRemain: number;
		plans: IPackagePlan.IResponse[];
	};

	export interface ISubscriptionResponse extends BaseResponse {
		package_id: string;
		shop_id: string;
		active?: boolean | null;
		paymentCode?: string | null;
		name: string;
		day: number;
		price: number | string;
		month: number | string;
		startDate?: string | Date;
		endDate?: string | Date;
		trialEndsAt: string | Date | null;
		packagePlans?: IPackagePlan.IResponse[];

		extendStaff?: number | string | null;
		extendBranch?: number | string | null;
	}

	export interface ISubscriptionReportResponse {
		shop_id?: number;
		package_id: number;
		packageLevel?: number;
		packagePrice?: number;
		paymentPrice?: number;
		day?: number;
		week?: number;
		month?: number;
		quarter?: number;
		year?: number;
		date?: string;
	}
}
