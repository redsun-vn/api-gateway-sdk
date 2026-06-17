import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmLead } from "../../../../../../libs/shared/src/types/crm-service/ilead";
export declare function findAllScoped(connection: IConnection, query: findAllScoped.Query): Promise<findAllScoped.Output>;
export declare namespace findAllScoped {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ICrmLead.ICrmLeadResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/leads/scoped";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllScoped.Query) => string;
}
