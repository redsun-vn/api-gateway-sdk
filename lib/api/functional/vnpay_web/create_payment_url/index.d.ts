import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IVNPayWeb } from "../../../../libs/shared/src/types/payment-service/ivnpay-web.type";
export declare function createPaymentURL(connection: IConnection, data: createPaymentURL.Input): Promise<createPaymentURL.Output>;
export declare namespace createPaymentURL {
    type Input = Resolved<IVNPayWeb.ICreatePublicPaymentURL>;
    type Output = Primitive<IResponse<IVNPayWeb.IResponsePaymentURL>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/vnpay-web/create-payment-url";
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
