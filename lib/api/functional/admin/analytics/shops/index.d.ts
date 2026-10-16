import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAnalyticsAdmin } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-admin.type";
import type { IAnalyticsPage } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-common.type";
import type { IQuery, IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function shopCreatedCount(connection: IConnection, query: shopCreatedCount.Query): Promise<shopCreatedCount.Output>;
export declare namespace shopCreatedCount {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IAnalyticsPage<IAnalyticsAdmin.IShopCreatedCountItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/analytics/shops";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: shopCreatedCount.Query) => string;
}
