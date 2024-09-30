import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IVNPayQRCode } from "../../../../../libs/shared/src/types/payment-service/ivnpay-qrcode.type";
export declare function createQRCode(connection: IConnection, data: createQRCode.Input): Promise<createQRCode.Output>;
export declare namespace createQRCode {
    type Input = Resolved<IVNPayQRCode.ICreate>;
    type Output = Primitive<IResponse<IVNPayQRCode.IQRCodeResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/vnpay-qrcode/create";
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
