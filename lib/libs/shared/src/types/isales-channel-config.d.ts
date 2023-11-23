import { BaseResponse } from './common.type';
export declare namespace ISalesChannelConfig {
    interface ICreate {
        shop_sales_channel_id: string;
        name: string;
        key: string;
        value?: string;
        metadata?: string;
    }
    interface IUpdate extends Omit<Partial<ICreate>, 'shop_sales_channel_id'> {
    }
    interface ISalesChannelConfigResponse extends BaseResponse {
        shop_id: string | number;
        shop_sales_channel_id: string;
        name: string;
        key: string;
        value?: string | null;
        metadata?: string | null;
    }
}
