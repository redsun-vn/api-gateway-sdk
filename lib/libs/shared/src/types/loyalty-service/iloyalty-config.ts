/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from '../common.type';

export namespace ILoyaltyConfig {
	export interface IResponse extends BaseResponse {
		shop_id: number | string;
		active: boolean;
		isAutoApply: boolean;
		pointConversionRate: number;
		moneyConversionRate: number;
	}

	export interface ICreate {
		active?: boolean;
		isAutoApply?: boolean;
		pointConversionRate?: number;
		moneyConversionRate?: number;
	}

	export type IUpdate = Partial<ICreate>;
}
