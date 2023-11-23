import { BaseResponse } from './common.type';
import { ISalesChannel } from './isales-channel';
import { ISalesChannelConfig } from './isales-channel-config';
export declare namespace IShopSalesChannel {
    interface ICreate {
        sales_channel_id: string;
        active?: boolean;
        isConnected?: boolean;
    }
    interface IUpdate {
        active?: boolean;
        isConnected?: boolean;
    }
    interface IShopSalesChannelResponse extends BaseResponse {
        sales_channel_id: string;
        shop_id: string;
        active: boolean;
        isConnected: boolean;
        salesChannel: ISalesChannel.ISalesChannelResponse;
        configs?: unknown | ISalesChannelConfig.ISalesChannelConfigResponse[];
    }
}
