import { BaseResponse } from './common.type';
export declare namespace IPaymentConfig {
    interface ICreate {
        shop_payment_method_id: string;
        name: string;
        key: string;
        value?: string;
        metadata?: string;
    }
    interface IUpdate {
        name?: string;
        key?: string;
        value?: string;
        metadata?: string;
    }
    interface IPaymentConfigResponse extends BaseResponse {
        shop_id: string | number;
        shop_payment_method_id: string;
        name: string;
        key: string;
        value?: null | string;
        metadata?: null | string;
    }
}
