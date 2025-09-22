/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';

export namespace ILoyaltyCoupon {
	export interface ILoyaltyCouponCreate {
		code?: string;
		program_id: number & tags.Type<'uint64'>;
		currencyCode?: string;
		points?: number;
		expirationDate?: string & tags.Format<'date-time'>;
		order_uuid?: string & tags.Format<'uuid'>;
		partner_uuid?: (string & tags.Format<'uuid'>) | null;
	}

	export interface ILoyaltyCouponUpdate
		extends Omit<Partial<ILoyaltyCouponCreate>, 'program_id'> {}

	export interface ILoyaltyCouponResponse extends BaseResponse {
		shop_id: number | string;
		program_id: number | string;
		currencyCode: string;
		points: number | null;
		code: string | null;
		expirationDate?: string | null;
		order_uuid: string | null;
		partner_uuid?: string | null;
	}
}
