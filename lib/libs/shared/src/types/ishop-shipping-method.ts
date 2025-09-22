/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from './common.type';
import { IShippingMethod } from './ishipping-method';
import { IShippingConfig } from './ishipping-config';
export namespace IShopShippingMethod {
	export interface ICreate {
		shipping_method_id: string;
		active?: boolean;
		isConnected?: boolean;
	}
	export interface IUpdate {
		active?: boolean;
		isConnected?: boolean;
	}
	export interface IShopShippingMethodResponse extends BaseResponse {
		shipping_method_id: string;
		shop_id: string;
		active: boolean;
		isConnected: boolean;
		shippingMethod: IShippingMethod.IShippingMethodResponse;
		configs?: null | IShippingConfig.IShippingConfigResponse[];
	}
}
