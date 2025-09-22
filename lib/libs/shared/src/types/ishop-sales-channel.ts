/* eslint-disable @typescript-eslint/no-namespace */
import { BaseResponse } from './common.type';
import { ISalesChannel } from './isales-channel';
import { ISalesChannelConfig } from './isales-channel-config';
export namespace IShopSalesChannel {
	export interface ICreate {
		sales_channel_id: string;
		active?: boolean;
		isConnected?: boolean;
	}
	export interface IUpdate {
		active?: boolean;
		isConnected?: boolean;
	}
	export interface IShopSalesChannelResponse extends BaseResponse {
		sales_channel_id: string;
		shop_id: string;
		active: boolean;
		isConnected: boolean;
		salesChannel: ISalesChannel.ISalesChannelResponse;
		configs?: null | ISalesChannelConfig.ISalesChannelConfigResponse[];
	}
}
