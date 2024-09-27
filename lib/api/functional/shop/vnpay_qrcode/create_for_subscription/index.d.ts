import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IVNPayQRCode } from "../../../../../libs/shared/src/types/payment-service/ivnpay-qrcode.type";
export declare function createQRCodeForSubscription(connection: IConnection, data: createQRCodeForSubscription.Input): Promise<createQRCodeForSubscription.Output>;
export declare namespace createQRCodeForSubscription {
    type Input = Resolved<IVNPayQRCode.ICreate>;
    type Output = Primitive<IResponse<IVNPayQRCode.IQRCodeResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/vnpay-qrcode/create-for-subscription";
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
