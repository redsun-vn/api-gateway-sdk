import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../libs/shared/src/types/common.type";
import type { IPaymentLink } from "../../../libs/shared/src/types/payment-service/ipayment-link.type";
export declare function findOne(connection: IConnection, code: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IPaymentLink.IPaymentLinkResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/payment-links/:code";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (code: string) => string;
}
