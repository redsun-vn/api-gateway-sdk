import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { ISubscriptionOrder } from "../../../../libs/shared/src/types/order-service/isubscription.type";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ISubscriptionOrder.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/order-subscriptions";
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
    type Output = Primitive<IResponse<ISubscriptionOrder.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/order-subscriptions/:id";
        readonly request: null;
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
        readonly path: "/shop/order-subscriptions/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function update(connection: IConnection, id: string, body: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<ISubscriptionOrder.IUpdateReq>;
    type Output = Primitive<IResponse<ISubscriptionOrder.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/order-subscriptions/:id";
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
export declare function cancel(connection: IConnection, id: string, body: cancel.Input): Promise<cancel.Output>;
export declare namespace cancel {
    type Input = Resolved<ISubscriptionOrder.ICancelReq>;
    type Output = Primitive<IResponse<ISubscriptionOrder.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/order-subscriptions/:id/cancel";
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
