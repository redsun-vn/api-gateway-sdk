/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from '../common.type';

export namespace ITransactionReconciliation {
	export interface IResponse extends BaseResponse {
		uuid: string;
		shop_id: number | string;
		transaction_id: number | string;
		reconciliation_id: number | string;
		orderCode: string;
		shippingCode: string;
		amount: string | number;
	}
}
