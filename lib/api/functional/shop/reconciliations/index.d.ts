import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { IReconciliation } from "../../../../libs/shared/src/types/reconciliation-service/ireconciliation";
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Primitive<IReconciliation.ICreate>;
    type Output = Primitive<IResponse<IReconciliation.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/reconciliations";
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
    const path: () => string;
}
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IReconciliation.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reconciliations";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (query: list.Query) => string;
}
export declare function detail(connection: IConnection, id: string): Promise<detail.Output>;
export declare namespace detail {
    type Output = Primitive<IResponse<IReconciliation.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reconciliations/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
export declare function update(connection: IConnection, id: string, data: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Primitive<IReconciliation.IUpdate>;
    type Output = Primitive<IResponse<IReconciliation.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/reconciliations/:id";
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
export declare function cancel(connection: IConnection, id: string, data: cancel.Input): Promise<cancel.Output>;
export declare namespace cancel {
    type Input = Primitive<IReconciliation.ICancel>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/reconciliations/:id/cancel";
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
export declare function release(connection: IConnection, id: string, data: release.Input): Promise<release.Output>;
export declare namespace release {
    type Input = Primitive<IReconciliation.IRelease>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/reconciliations/:id/release";
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
