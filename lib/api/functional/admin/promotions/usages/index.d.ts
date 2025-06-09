import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IPromotionUsage } from "../../../../../libs/shared/src/types/shop-service/promotion";
export declare function findAllPromotionUsages(connection: IConnection, query: findAllPromotionUsages.Query): Promise<findAllPromotionUsages.Output>;
export declare namespace findAllPromotionUsages {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IPromotionUsage.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/promotions/usages";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllPromotionUsages.Query) => string;
}
