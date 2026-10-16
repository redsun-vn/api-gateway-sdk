import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAnalyticsPage } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-common.type";
import type { IAnalyticsProducts } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-products.type";
import type { IQuery, IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function topSellingProducts(connection: IConnection, query: topSellingProducts.Query): Promise<topSellingProducts.Output>;
export declare namespace topSellingProducts {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IAnalyticsPage<IAnalyticsProducts.ITopSellingProductItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/analytics/top-selling";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: topSellingProducts.Query) => string;
}
