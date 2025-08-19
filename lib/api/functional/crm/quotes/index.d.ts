import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMQuote } from "../../../../libs/shared/src/types/admin-service/crm/quote";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ICRMQuote.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/crm/quotes";
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
    type Output = Primitive<IResponse<ICRMQuote.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/crm/quotes/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
