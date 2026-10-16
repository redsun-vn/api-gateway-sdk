import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAnalyticsPage } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-common.type";
import type { IAnalyticsProducts } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-products.type";
import type { IQuery, IResponse } from "../../../../../libs/shared/src/types/common.type";
export * as $export from "./$export";
export declare function bestSellingVariants(connection: IConnection, query: bestSellingVariants.Query): Promise<bestSellingVariants.Output>;
export declare namespace bestSellingVariants {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IAnalyticsPage<IAnalyticsProducts.IBestSellingVariantItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/analytics/best-selling";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: bestSellingVariants.Query) => string;
}
