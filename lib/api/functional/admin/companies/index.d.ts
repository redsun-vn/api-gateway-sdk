import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICompany } from "../../../../libs/shared/src/types/admin-service/crm/company";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ICompany.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/companies";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
