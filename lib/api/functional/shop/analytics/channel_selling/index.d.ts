import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAnalyticsPage } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-common.type";
import type { IAnalyticsSales } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-sales.type";
import type { IQuery, IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function revenueBySalesChannel(connection: IConnection, query: revenueBySalesChannel.Query): Promise<revenueBySalesChannel.Output>;
export declare namespace revenueBySalesChannel {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IAnalyticsPage<IAnalyticsSales.IRevenueBySalesChannelItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/analytics/channel-selling";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: revenueBySalesChannel.Query) => string;
}
