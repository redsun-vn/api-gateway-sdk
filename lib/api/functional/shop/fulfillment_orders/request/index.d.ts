import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IFulfillmentOrder } from "../../../../../libs/shared/src/types/fulfillment-service/ifulfillment-order";
export declare function requestFulfillment(connection: IConnection, id: string, data: requestFulfillment.Input): Promise<requestFulfillment.Output>;
export declare namespace requestFulfillment {
    type Input = Primitive<IFulfillmentOrder.IFulfillmentOrderRequestShipping>;
    type Output = Primitive<IResponse<IFulfillmentOrder.IFulfillmentOrderResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/fulfillment-orders/:id/request";
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
    const path: (id: string) => string;
}
