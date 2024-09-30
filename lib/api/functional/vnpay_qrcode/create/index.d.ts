import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IVNPayQRCode } from "../../../../libs/shared/src/types/payment-service/ivnpay-qrcode.type";
export declare function createQRCode(connection: IConnection, data: createQRCode.Input): Promise<createQRCode.Output>;
export declare namespace createQRCode {
    type Input = Primitive<IVNPayQRCode.ICreatePublic>;
    type Output = Primitive<IResponse<IVNPayQRCode.IQRCodeResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/vnpay-qrcode/create";
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
