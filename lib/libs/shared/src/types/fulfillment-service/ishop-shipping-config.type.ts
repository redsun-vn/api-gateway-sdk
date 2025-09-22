/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from '../common.type';

export namespace IShopShippingConfig {
	export interface ICreate {
		providerCode: string;
		key: string;
		value: any | string;
	}

	export interface IResponse extends BaseResponse {
		providerCode: string;
		shop_id: string | number | null;
		key: string;
		value: any | string;
	}
}
