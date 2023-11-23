import { BaseResponse } from './common.type';
import { IPaymentMethod } from './ipayment-method';
import { IPaymentConfig } from '@shared';
export declare namespace IShopPaymentMethod {
    interface ICreate {
        payment_method_id: string;
        active?: boolean;
        isConnected?: boolean;
    }
    interface IUpdate {
        active?: boolean;
        isConnected?: boolean;
    }
    interface IShopPaymentMethodResponse extends BaseResponse {
        payment_method_id: string;
        shop_id: string;
        active: boolean;
        isConnected: boolean;
        paymentMethod: IPaymentMethod.IPaymentMethodResponse;
        configs?: unknown | IPaymentConfig.IPaymentConfigResponse[];
    }
}
