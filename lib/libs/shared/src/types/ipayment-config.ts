/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from './common.type';

export namespace IPaymentConfig {
	export interface ICreate {
		shop_payment_method_id: string;
		name: string;
		key: string;
		value?: string;
		metadata?: string;
	}
	export interface IUpdate {
		name?: string;
		key?: string;
		value?: string;
		metadata?: string;
	}
	export interface IPaymentConfigResponse extends BaseResponse {
		shop_id: string | number;
		shop_payment_method_id: string;
		name: string;
		key: string;
		value?: null | string;
		metadata?: null | string;
	}
}
