import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IFulfillmentOrderItem } from "../../../../../libs/shared/src/types/fulfillment-service/ifulfillment-line-item";
import type { IFulfillmentOrder } from "../../../../../libs/shared/src/types/fulfillment-service/ifulfillment-order";
export declare function updateItem(connection: IConnection, id: string, itemId: string, data: updateItem.Input): Promise<updateItem.Output>;
export declare namespace updateItem {
    type Input = Primitive<IFulfillmentOrder.IUpdateFulfillmentOrderItem>;
    type Output = Primitive<IResponse<IFulfillmentOrderItem.ILineItemResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/fulfillment-orders/:id/item/:itemId";
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
    const path: (id: string, itemId: string) => string;
}
