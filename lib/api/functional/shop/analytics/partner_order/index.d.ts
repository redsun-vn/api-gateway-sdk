import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAnalyticsCustomers } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-customers.type";
import type { IQuery, IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function customerOrderHistory(connection: IConnection, query: customerOrderHistory.Query, partnerId: string): Promise<customerOrderHistory.Output>;
export declare namespace customerOrderHistory {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IAnalyticsCustomers.IOrderHistory>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/analytics/partner-order/:partner_id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: customerOrderHistory.Query, partnerId: string) => string;
}
