import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IWebsite } from "../../../../../libs/shared/src/types/cms-service/iwebsite";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
export declare function findAllByShopId(connection: IConnection, query: findAllByShopId.Query): Promise<findAllByShopId.Output>;
export declare namespace findAllByShopId {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IWebsite.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/cms/websites/find-all-by-shop-id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllByShopId.Query) => string;
}
