import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IDrafOrder } from "../../../../../libs/shared/src/types/order-service/idraf-order.type";
export * as copy from "./copy";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IDrafOrder.IDetailDrafOrderResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/order/draf-orders";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IDrafOrder.IDetailDrafOrderResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/order/draf-orders/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function verify(connection: IConnection, id: string): Promise<verify.Output>;
export declare namespace verify {
    type Output = Primitive<IResponse<IDrafOrder.IDetailDrafOrderResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/order/draf-orders/:id/verify";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function confirm(connection: IConnection, id: string, input: confirm.Input): Promise<confirm.Output>;
export declare namespace confirm {
    type Input = Resolved<IDrafOrder.IConfirmDrafOrder>;
    type Output = Primitive<IResponse<IDrafOrder.IDetailDrafOrderResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/order/draf-orders/:id/confirm";
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
export declare function complete(connection: IConnection, id: string): Promise<complete.Output>;
export declare namespace complete {
    type Output = Primitive<IResponse<IDrafOrder.IDetailDrafOrderResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/order/draf-orders/:id/complete";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function create(connection: IConnection, input: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IDrafOrder.ICreateDrafOrder>;
    type Output = Primitive<IResponse<IDrafOrder.IDetailDrafOrderResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/order/draf-orders";
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
export declare function update(connection: IConnection, id: string, input: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IDrafOrder.IUpdateDrafOrder>;
    type Output = Primitive<IResponse<IDrafOrder.IDetailDrafOrderResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/order/draf-orders/:id";
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
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/order/draf-orders/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
