import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { IPointTransaction } from "../../../../libs/shared/src/types/loyalty-service/ipoint-transaction";
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IPointTransaction.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/point-transactions";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: list.Query) => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IPointTransaction.ICreate>;
    type Output = Primitive<IResponse<IPointTransaction.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/point-transactions";
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
