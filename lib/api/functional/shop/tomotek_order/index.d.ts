import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { ITomotekOrder } from "../../../../libs/shared/src/types/payment-service/itomotek-order.type";
export declare function createOrder(connection: IConnection, createOrderDto: createOrder.Input): Promise<createOrder.Output>;
export declare namespace createOrder {
    type Input = Resolved<ITomotekOrder.ICreate>;
    type Output = Primitive<IResponse<ITomotekOrder.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/tomotek-order";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
export declare function updateOrder(connection: IConnection, shopId: string, updateOrderDto: updateOrder.Input): Promise<updateOrder.Output>;
export declare namespace updateOrder {
    type Input = Resolved<ITomotekOrder.IUpdate>;
    type Output = Primitive<IResponse<ITomotekOrder.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/tomotek-order/:shopId";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (shopId: string) => string;
}
export declare function getOrder(connection: IConnection, shopId: string): Promise<getOrder.Output>;
export declare namespace getOrder {
    type Output = Primitive<IResponse<ITomotekOrder.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/tomotek-order/:shopId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (shopId: string) => string;
}
