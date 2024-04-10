import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { IAdminReconciliation } from "../../../../libs/shared/src/types/reconciliation-service/iadmin-reconciliation";
export * as item from "./item";
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Primitive<IAdminReconciliation.ICreate>;
    type Output = Primitive<IResponse<IAdminReconciliation.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/reconciliations";
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
    type Output = Primitive<IResponse<IResponsePagination<IAdminReconciliation.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/reconciliations";
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
    type Output = Primitive<IResponse<IAdminReconciliation.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/reconciliations/:id";
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
    type Input = Primitive<IAdminReconciliation.IUpdate>;
    type Output = Primitive<IResponse<IAdminReconciliation.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/reconciliations/:id";
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
    type Input = Primitive<IAdminReconciliation.ICancel>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/reconciliations/:id/cancel";
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
export declare function release(connection: IConnection, id: string): Promise<release.Output>;
export declare namespace release {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/reconciliations/:id/release";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
