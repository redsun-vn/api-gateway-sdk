import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmDashboard } from "../../../../../../libs/shared/src/types/crm-service/idashboard";
export declare function leadSourceAnalytics(connection: IConnection, query: leadSourceAnalytics.Query): Promise<leadSourceAnalytics.Output>;
export declare namespace leadSourceAnalytics {
    type Query = Resolved<ICrmDashboard.IDateRangeQuery>;
    type Output = Primitive<IResponse<ICrmDashboard.ILeadSourceAnalyticsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/dashboard/lead-source-analytics";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: leadSourceAnalytics.Query) => string;
}
