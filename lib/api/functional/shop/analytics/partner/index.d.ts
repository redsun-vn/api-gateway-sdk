import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAnalyticsPage } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-common.type";
import type { IAnalyticsCustomers } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-customers.type";
import type { IQuery, IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function newCustomerCount(connection: IConnection, query: newCustomerCount.Query): Promise<newCustomerCount.Output>;
export declare namespace newCustomerCount {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IAnalyticsPage<IAnalyticsCustomers.INewCustomerCountItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/analytics/partner";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: newCustomerCount.Query) => string;
}
