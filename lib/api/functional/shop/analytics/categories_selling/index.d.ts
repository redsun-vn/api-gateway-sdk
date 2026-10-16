import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAnalyticsPage } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-common.type";
import type { IAnalyticsProducts } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-products.type";
import type { IQuery, IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function salesByCategory(connection: IConnection, query: salesByCategory.Query): Promise<salesByCategory.Output>;
export declare namespace salesByCategory {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IAnalyticsPage<IAnalyticsProducts.ICategorySalesItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/analytics/categories-selling";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: salesByCategory.Query) => string;
}
