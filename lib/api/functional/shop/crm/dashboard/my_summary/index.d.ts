import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmDashboard } from "../../../../../../libs/shared/src/types/crm-service/idashboard";
export declare function mySummary(connection: IConnection, query: mySummary.Query): Promise<mySummary.Output>;
export declare namespace mySummary {
    type Query = Resolved<ICrmDashboard.IMySummaryQuery>;
    type Output = Primitive<IResponse<ICrmDashboard.IMySummaryResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/dashboard/my-summary";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: mySummary.Query) => string;
}
