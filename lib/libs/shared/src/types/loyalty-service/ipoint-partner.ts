/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from '../common.type';
import { ILoyaltyLevel } from './iloyalty-level';

export namespace IPointPartner {
	export interface ICreate {
		active?: boolean;
		partner_id: string | number;
		totalPoints?: number;
		availablePoints?: number;
		loyalty_level_id?: string | number | null;
		expireDate?: string;
	}

	export interface IUpdate {
		active?: boolean;
		totalPoints?: number;
		availablePoints?: number;
		loyalty_level_id?: string | number | null;
		expireDate?: string | number;
	}

	export interface IResponse extends BaseResponse {
		shop_id?: string | number | null;
		active?: boolean | null;
		level?: ILoyaltyLevel.IResponse | null;
		partner_id: string | number;
		totalPoints: number;
		availablePoints: number;
		loyalty_level_id?: string | number | null;
		expireDate?: string | number | null;
	}
}
