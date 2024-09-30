import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IPaymentLink } from "../../../../../libs/shared/src/types/payment-service/ipayment-link.type";
export declare function findOneByOrderId(connection: IConnection, orderId: string): Promise<findOneByOrderId.Output>;
export declare namespace findOneByOrderId {
    type Output = Primitive<IResponse<IPaymentLink.IPaymentLinkResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/payment-links/order/:orderId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (orderId: string) => string;
}
