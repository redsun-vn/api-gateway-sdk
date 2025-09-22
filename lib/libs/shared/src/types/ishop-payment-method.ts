/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from './common.type';
import { IPaymentMethod } from './ipayment-method';
import { IPaymentConfig } from './ipayment-config';
export namespace IShopPaymentMethod {
	export interface ICreate {
		payment_method_id: string;
		active?: boolean;
		isConnected?: boolean;
		bank_account_id?: string;
	}
	export interface IUpdate {
		active?: boolean;
		isConnected?: boolean;
		bank_account_id?: string;
	}
	export interface IShopPaymentMethodResponse extends BaseResponse {
		payment_method_id: string;
		shop_id: string;
		active: boolean;
		isConnected: boolean;
		paymentMethod: IPaymentMethod.IPaymentMethodResponse;
		configs?: null | IPaymentConfig.IPaymentConfigResponse[];
		bank_account_id?: string | number | null;
	}
}
