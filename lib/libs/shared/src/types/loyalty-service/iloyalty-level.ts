/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from '../common.type';

export namespace ILoyaltyLevel {
	export interface IResponse extends BaseResponse {
		active?: boolean | null;
		isDefault?: boolean;
		shop_id: number | string;
		image_id?: number | string | null;
		name: number | string;
		limitDiscount: boolean;
		discount: number;
		maxDiscount: number;
		totalPointRequire: number | string;
	}

	export interface ICreate {
		shop_id: number | string;
		active?: boolean;
		isDefault?: boolean;
		name: number | string;
		image_id?: number | string;
		limitDiscount?: boolean;
		discount?: number;
		maxDiscount?: number;
		totalPointRequire: number | string;
	}

	export type IUpdate = Partial<ICreate>;
}
