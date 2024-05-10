import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { IOrderReconciliation } from "../../../../libs/shared/src/types/reconciliation-service/iorder-reconciliation.type";
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IOrderReconciliation.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/order-reconciliations";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (query: list.Query) => string;
}
