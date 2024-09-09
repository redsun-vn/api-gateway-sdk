import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IQuery, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { IFulfillmentOrder } from "../../../../libs/shared/src/types/fulfillment-service/ifulfillment-order";
export * as request from "./request";
export * as item from "./item";
export * as order from "./order";
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IFulfillmentOrder.ICreateFulfillmentOrder>;
    type Output = Primitive<IResponse<IFulfillmentOrder.IFulfillmentOrderResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/fulfillment-orders";
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
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IFulfillmentOrder.IFulfillmentOrderResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/fulfillment-orders";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function getDetail(connection: IConnection, id: string): Promise<getDetail.Output>;
export declare namespace getDetail {
    type Output = Primitive<IResponse<IFulfillmentOrder.IFulfillmentOrderResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/fulfillment-orders/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function update(connection: IConnection, id: string, data: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IFulfillmentOrder.IUpdateFulfillmentOrder>;
    type Output = Primitive<IResponse<IFulfillmentOrder.IFulfillmentOrderResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/fulfillment-orders/:id";
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
    const path: (id: string) => string;
}
export declare function cancel(connection: IConnection, id: string, data: cancel.Input): Promise<cancel.Output>;
export declare namespace cancel {
    type Input = Resolved<IFulfillmentOrder.ICancelFulfillmentOrder>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/fulfillment-orders/:id/cancel";
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
    const path: (id: string) => string;
}
