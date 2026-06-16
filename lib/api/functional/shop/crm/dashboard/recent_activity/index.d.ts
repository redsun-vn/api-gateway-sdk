import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmDashboard } from "../../../../../../libs/shared/src/types/crm-service/idashboard";
export declare function recentActivity(connection: IConnection, query: recentActivity.Query): Promise<recentActivity.Output>;
export declare namespace recentActivity {
    type Query = Resolved<ICrmDashboard.IRecentActivityQuery>;
    type Output = Primitive<IResponse<ICrmDashboard.IRecentActivityResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/dashboard/recent-activity";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: recentActivity.Query) => string;
}
