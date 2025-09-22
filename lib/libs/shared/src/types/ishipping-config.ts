/* eslint-disable @typescript-eslint/no-namespace */
// import { tags } from 'typia';

import { BaseResponse } from './common.type';

export namespace IShippingConfig {
	export interface ICreate {
		shop_shipping_method_id: string;
		name: string;
		key: string;
		value?: string;
		metadata?: string;
	}
	export interface IUpdate
		extends Omit<Partial<ICreate>, 'shop_shipping_method_id'> {}
	export interface IShippingConfigResponse extends BaseResponse {
		shop_id: string | number;
		shop_shipping_method_id: string;
		name: string;
		key: string;
		value?: null | string;
		metadata?: null | string;
	}
}
