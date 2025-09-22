/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { AdditionalFeeType } from '../../enum';
import { IOrder } from './iorder.type';
import { IDrafOrder } from './idraf-order.type';
import { ISaleOrder } from './isale-order';

export namespace IAdditionalFee {
	export interface ICreateAdditionalFee {
		shop_id?: number & tags.Type<'uint64'>;
		staff_id: number & tags.Type<'uint64'>;
		order_id?: number & tags.Type<'uint64'>;
		draf_order_id?: number & tags.Type<'uint64'>;
		sale_order_id?: number & tags.Type<'uint64'>;
		name: string;
		amount: number;
		type: AdditionalFeeType;
		subscription_id?: number & tags.Type<'uint64'>;
	}

	export interface IUpdateAdditionalFee
		extends Omit<Partial<ICreateAdditionalFee>, 'shop_id' | 'staff_id'> {}

	export interface IDetailAdditionalFeeResponse extends BaseResponse {
		shop_id: number | string;
		staff_id: number | string;
		order_id?: number | string | null;
		draf_order_id?: number | string | null;
		sale_order_id?: number | string | null;
		subscription_id?: number | string | null;
		name: string;
		amount: number | string;
		type: string;
		order?: IOrder.IDetailOrderResponse | null;
		drafOrder?: IDrafOrder.IDetailDrafOrderResponse | null;
		saleOrder?: ISaleOrder.IResponse | null;
	}
}
