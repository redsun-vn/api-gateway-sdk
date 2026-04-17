import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IResponsePagination } from "../../../../../../libs/shared/src/types/common.type";
import type { IOmnichannel } from "../../../../../../libs/shared/src/types/omnichannel-service/omnichannel.type";
export * as stats from "./stats";
export * as bulk_create from "./bulk_create";
export * as by_order from "./by_order";
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<IOmnichannel.MappingListQuery>;
    type Output = Primitive<IResponse<IResponsePagination<any>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/omnichannel/orders/mapping";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: list.Query) => string;
}
export declare function detail(connection: IConnection, id: number): Promise<detail.Output>;
export declare namespace detail {
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/omnichannel/orders/mapping/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function raw(connection: IConnection, id: number): Promise<raw.Output>;
export declare namespace raw {
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/omnichannel/orders/mapping/:id/raw";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function create(connection: IConnection, id: number): Promise<create.Output>;
export declare namespace create {
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/omnichannel/orders/mapping/:id/create";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
export declare function retry(connection: IConnection, id: number): Promise<retry.Output>;
export declare namespace retry {
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/omnichannel/orders/mapping/:id/retry";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
