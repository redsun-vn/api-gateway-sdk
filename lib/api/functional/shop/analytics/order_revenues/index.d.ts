import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAnalyticsPage } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-common.type";
import type { IAnalyticsSales } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-sales.type";
import type { IQuery, IResponse } from "../../../../../libs/shared/src/types/common.type";
export * as $export from "./$export";
export declare function revenueByPeriod(connection: IConnection, query: revenueByPeriod.Query): Promise<revenueByPeriod.Output>;
export declare namespace revenueByPeriod {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IAnalyticsPage<IAnalyticsSales.IRevenueByPeriodItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/analytics/order-revenues";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: revenueByPeriod.Query) => string;
}
