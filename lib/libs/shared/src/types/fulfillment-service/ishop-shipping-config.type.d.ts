import { BaseResponse } from '../common.type';
export declare namespace IShopShippingConfig {
    interface ICreate {
        providerCode: string;
        key: string;
        value: any | string;
    }
    interface IResponse extends BaseResponse {
        providerCode: string;
        shop_id: string | number | null;
        key: string;
        value: any | string;
    }
}
