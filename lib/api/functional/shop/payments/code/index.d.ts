import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IPayment } from "../../../../../libs/shared/src/types/payment-service/ipayment.type";
export declare function findOneByCode(connection: IConnection, code: string): Promise<findOneByCode.Output>;
export declare namespace findOneByCode {
    type Output = Primitive<IResponse<IPayment.IPaymentResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/payments/:code/code";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (code: string) => string;
}
