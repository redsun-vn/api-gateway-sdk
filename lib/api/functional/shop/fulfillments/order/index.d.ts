import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IFulfillment } from "../../../../../libs/shared/src/types/fulfillment-service/ifulfillment";
export declare function getByOrderId(connection: IConnection, orderId: string): Promise<getByOrderId.Output>;
export declare namespace getByOrderId {
    type Output = Primitive<IResponse<Array<IFulfillment.IFulfillmentResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/fulfillments/order/:orderId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (orderId: string) => string;
}
