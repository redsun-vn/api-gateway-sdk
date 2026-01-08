import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ITemplate } from "../../../../libs/shared/src/types/cms-service/itemplate";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
export * as theme from "./theme";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ITemplate.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/cms/templates";
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
    type Output = Primitive<IResponse<ITemplate.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/cms/templates/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
