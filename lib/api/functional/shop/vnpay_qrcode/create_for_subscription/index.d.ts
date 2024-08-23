import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IVNPayQRCode } from "../../../../../libs/shared/src/types/payment-service/ivnpay-qrcode.type";
export declare function createQRCodeForSubscription(connection: IConnection, data: createQRCodeForSubscription.Input): Promise<createQRCodeForSubscription.Output>;
export declare namespace createQRCodeForSubscription {
    type Input = Primitive<IVNPayQRCode.ICreate>;
    type Output = Primitive<IResponse<IVNPayQRCode.IServerResponse>>;
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
        readonly status: null;
    };
    const path: () => string;
}
