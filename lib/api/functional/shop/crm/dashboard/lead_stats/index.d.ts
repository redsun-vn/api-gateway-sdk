import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmDashboard } from "../../../../../../libs/shared/src/types/crm-service/idashboard";
export declare function leadStats(connection: IConnection, query: leadStats.Query): Promise<leadStats.Output>;
export declare namespace leadStats {
    type Query = Resolved<ICrmDashboard.IDateRangeQuery>;
    type Output = Primitive<IResponse<ICrmDashboard.ILeadStatsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/dashboard/lead-stats";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: leadStats.Query) => string;
}
