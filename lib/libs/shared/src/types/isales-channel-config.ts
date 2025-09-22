/* eslint-disable @typescript-eslint/no-namespace */

import { BaseResponse } from './common.type';

export namespace ISalesChannelConfig {
	export interface ICreate {
		shop_sales_channel_id: string;
		name: string;
		key: string;
		value?: string;
		metadata?: string;
	}
	export interface IUpdate
		extends Omit<Partial<ICreate>, 'shop_sales_channel_id'> {}
	export interface ISalesChannelConfigResponse extends BaseResponse {
		shop_id: string | number;
		shop_sales_channel_id: string;
		name: string;
		key: string;
		value?: string | null;
		metadata?: string | null;
	}
}
