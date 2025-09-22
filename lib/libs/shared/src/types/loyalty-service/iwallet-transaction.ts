/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from '../common.type';

export namespace IWalletTransaction {
	export interface ICreate {
		amount: number;
		shop_id: string | number;
		partner_id: string | number;

		// để thêm vào meta_data
		product_id?: number;
		varant_id?: number;
	}

	export interface IResponse extends BaseResponse {
		amount: string | number;
		transactionType: string;
		description?: string | null;
	}
}
