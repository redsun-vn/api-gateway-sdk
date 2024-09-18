import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IVNPayQRCode } from "../../../../../../libs/shared/src/types/payment-service/ivnpay-qrcode.type";
export declare function findOne(connection: IConnection): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IVNPayQRCode.IResponseWithoutSecret>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/vnpay-qrcode/configs/find-one";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
