/* eslint-disable @typescript-eslint/no-namespace */

import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IOrder } from './iorder.type';
import { IDrafOrder } from './idraf-order.type';
import {
	CombiningPromotionStatus,
	OrderCombiningPromotionType,
} from '../../enum';
import { ISaleOrder } from './isale-order';

export namespace ICombiningPromotion {
	export interface ICreateCombiningPromotion {
		shop_id?: number & tags.Type<'uint64'>;
		program_id?: number & tags.Type<'uint64'>;
		coupon_id?: number & tags.Type<'uint64'>;
		order_id?: number & tags.Type<'uint64'>;
		draf_order_id?: number & tags.Type<'uint64'>;
		sale_order_id?: number & tags.Type<'uint64'>;
		line_item_id?: number & tags.Type<'uint64'>;
		variant_x_id?: number & tags.Type<'uint64'>;
		variant_y_id?: number & tags.Type<'uint64'>;
		uuid?: string & tags.Format<'uuid'>;
		description?: string;
		discountCode?: string;
		value: number;
		amount: number;
		status?: CombiningPromotionStatus;
		type?: OrderCombiningPromotionType;
	}

	export interface IUpdateCombiningPromotion
		extends Omit<Partial<ICreateCombiningPromotion>, 'shop_id' | 'uuid'> {}

	export interface IDetailCombiningPromotionResponse extends BaseResponse {
		shop_id: number | string | null;
		order_id?: number | string | null;
		coupon_id?: number | string | null;
		program_id?: number | string | null;
		draf_order_id?: number | string | null;
		sale_order_id?: number | string | null;
		line_item_id?: number | string | null;
		variant_x_id?: number | string | null;
		variant_y_id?: number | string | null;
		uuid?: string;
		description?: string | null;
		discountCode?: string | null;
		value: number | string;
		amount: number | string;
		status: CombiningPromotionStatus | string;
		type: OrderCombiningPromotionType | string;
		order?: IOrder.IDetailOrderResponse;
		drafOrder?: IDrafOrder.IDetailDrafOrderResponse;
		saleOrder?: ISaleOrder.IResponse;
	}
}
