import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IVNPayWeb } from "../../../../../libs/shared/src/types/payment-service/ivnpay-web.type";
export declare function createPaymentURLForSubscription(connection: IConnection, data: createPaymentURLForSubscription.Input): Promise<createPaymentURLForSubscription.Output>;
export declare namespace createPaymentURLForSubscription {
    type Input = Resolved<IVNPayWeb.ICreatePaymentURL>;
    type Output = Primitive<IResponse<IVNPayWeb.IResponsePaymentURL>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/vnpay-web/create-payment-url-for-subscription";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
