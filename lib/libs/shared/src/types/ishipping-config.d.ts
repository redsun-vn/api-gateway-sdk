import { BaseResponse } from './common.type';
export declare namespace IShippingConfig {
    interface ICreate {
        shop_shipping_method_id: string;
        name: string;
        key: string;
        value?: string;
        metadata?: string;
    }
    interface IUpdate extends Omit<Partial<ICreate>, 'shop_shipping_method_id'> {
    }
    interface IShippingConfigResponse extends BaseResponse {
        shop_id: string | number;
        shop_shipping_method_id: string;
        name: string;
        key: string;
        value?: null | string;
        metadata?: null | string;
    }
}
