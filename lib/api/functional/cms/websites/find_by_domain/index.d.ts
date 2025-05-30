import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IWebsite } from "../../../../../libs/shared/src/types/cms-service/iwebsite";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function findOneByDomain(connection: IConnection, query: findOneByDomain.Query): Promise<findOneByDomain.Output>;
export declare namespace findOneByDomain {
    type Query = Resolved<IWebsite.IQueryFindByDomain>;
    type Output = Primitive<IResponse<IWebsite.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/cms/websites/find-by-domain";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findOneByDomain.Query) => string;
}
