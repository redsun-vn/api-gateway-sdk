import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { IFulfillment } from "../../../../libs/shared/src/types/fulfillment-service/ifulfillment";
export * as cod from "./cod";
export * as order from "./order";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IFulfillment.IFulfillmentResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/fulfillments";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function detail(connection: IConnection, id: string): Promise<detail.Output>;
export declare namespace detail {
    type Output = Primitive<IResponse<IFulfillment.IFulfillmentResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/fulfillments/:id";
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
    type Input = Resolved<IFulfillment.IFulfillmentUpdate>;
    type Output = Primitive<IResponse<IFulfillment.IFulfillmentResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/fulfillments/:id";
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
export declare function cancel(connection: IConnection, id: string): Promise<cancel.Output>;
export declare namespace cancel {
    type Output = Primitive<IResponse<IFulfillment.IFulfillmentResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/fulfillments/:id/cancel";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
