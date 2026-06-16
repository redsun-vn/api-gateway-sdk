import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmDashboard } from "../../../../../../libs/shared/src/types/crm-service/idashboard";
export declare function activityPerOpp(connection: IConnection, query: activityPerOpp.Query): Promise<activityPerOpp.Output>;
export declare namespace activityPerOpp {
    type Query = Resolved<ICrmDashboard.IDateRangeQuery>;
    type Output = Primitive<IResponse<ICrmDashboard.IActivityPerOppResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/dashboard/activity-per-opp";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: activityPerOpp.Query) => string;
}
