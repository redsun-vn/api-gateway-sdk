import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmDashboard } from "../../../../../../libs/shared/src/types/crm-service/idashboard";
export declare function workSummary(connection: IConnection, query: workSummary.Query): Promise<workSummary.Output>;
export declare namespace workSummary {
    type Query = Resolved<ICrmDashboard.IWorkSummaryQuery>;
    type Output = Primitive<IResponse<ICrmDashboard.IWorkSummaryResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/dashboard/work-summary";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: workSummary.Query) => string;
}
