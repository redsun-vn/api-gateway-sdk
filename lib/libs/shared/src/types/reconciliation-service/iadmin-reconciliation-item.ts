/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { IAdminReconciliation } from './iadmin-reconciliation';

export namespace IAdminReconciliationItem {
	export interface ICreate {
		shop_id: number & tags.Type<'uint64'>;
		shipping_method_id: number & tags.Type<'uint64'>;
		fulfillment_id: number & tags.Type<'uint64'>;
		fulfillmentShippingStatus: string;
		order_uuid: string & tags.Format<'uuid'>;
		orderCode: string;
		cod: number;
		chargePrice: number;
	}

	export interface ICreateFromFulfillment {
		// fulfillment_id: number & tags.Type<'uint64'>;
		items: IAdminReconciliation.IFulfillmentReconciliation[];
	}

	export interface IResponse extends BaseResponse {
		shop_id: number | string;
		status: string;
		admin_reconciliation_id: number | string;
		shipping_method_id: number | string;
		fulfillment_id: number | string;
		order_uuid: string;
		shippingCode: string;
		orderCode: string;
		cod: number | string;
		chargePrice: number | string;
		fulfillmentShippingStatus: string;
	}
}
