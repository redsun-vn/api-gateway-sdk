import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { IPaymentReconciliation } from "../../../../libs/shared/src/types/reconciliation-service/ipayment-reconciliation";
export declare function detail(connection: IConnection, id: string): Promise<detail.Output>;
export declare namespace detail {
    type Output = Primitive<IResponse<IPaymentReconciliation.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/reconciliation-payments/:id";
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
    type Input = Primitive<IPaymentReconciliation.IAdminUpdate>;
    type Output = Primitive<IResponse<IPaymentReconciliation.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/reconciliation-payments/:id";
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
export declare function cancel(connection: IConnection, id: string): Promise<cancel.Output>;
export declare namespace cancel {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/reconciliation-payments/:id/cancel";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IPaymentReconciliation.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/reconciliation-payments";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (query: list.Query) => string;
}
