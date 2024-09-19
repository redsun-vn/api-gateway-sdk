import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse, IQuery, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { ITransactionReconService } from "../../../../libs/shared/src/types/reconciliation-service/itransaction";
export declare function detail(connection: IConnection, id: string): Promise<detail.Output>;
export declare namespace detail {
    type Output = Primitive<IResponse<ITransactionReconService.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reconciliation-transactions/:id";
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
    type Output = Primitive<IResponse<IResponsePagination<ITransactionReconService.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reconciliation-transactions";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (query: list.Query) => string;
}
