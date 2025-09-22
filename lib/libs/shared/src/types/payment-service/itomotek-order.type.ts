/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from '../common.type';

export namespace ITomotekOrder {
	export interface ICreate {
		branch_id?: number;
		payment_method_id: number;
		tomotek_config_id: number;
		billNumber?: string;
		transactionAmount: number;
		transResponseStatusCode?: number;
		transactionPurpose?: string;
		qrCodeType: number;
	}

	export interface IUpdate {
		payment_method_id?: number;
		tomotek_config_id?: number;
		billNumber?: string;
		transactionAmount?: number;
		transResponseStatusCode?: number;
		transactionPurpose?: string;
		qrCodeType?: number;
	}

	export interface IResponse extends BaseResponse {
		shop_id: number | string;
		branch_id: number | string;
		payment_method_id: number | string;
		tomotek_config_id: number | string;
		billNumber: string;
		transactionAmount: number;
		transResponseStatusCode: number;
		transactionPurpose: string;
		qrCodeType: number;
		requestAt?: string | null;
	}
}
