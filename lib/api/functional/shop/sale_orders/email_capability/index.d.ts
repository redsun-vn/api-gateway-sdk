import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISaleOrder } from "../../../../../libs/shared/src/types/order-service/isale-order";
export declare function getEmailCapability(connection: IConnection): Promise<getEmailCapability.Output>;
export declare namespace getEmailCapability {
    type Output = Primitive<IResponse<ISaleOrder.IEmailCapabilityResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/sale-orders/email-capability";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
