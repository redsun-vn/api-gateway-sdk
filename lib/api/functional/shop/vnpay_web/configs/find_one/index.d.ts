import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IVNPayWebConfig } from "../../../../../../libs/shared/src/types/payment-service/ivnpay-web.type";
export declare function findOne(connection: IConnection): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IVNPayWebConfig.IResponseWithoutSecret>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/vnpay-web/configs/find-one";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
