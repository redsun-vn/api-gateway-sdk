import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmDashboard } from "../../../../../../libs/shared/src/types/crm-service/idashboard";
export declare function boardSummary(connection: IConnection, query: boardSummary.Query): Promise<boardSummary.Output>;
export declare namespace boardSummary {
    type Query = Resolved<ICrmDashboard.IOpportunityBoardSummaryQuery>;
    type Output = Primitive<IResponse<ICrmDashboard.IOpportunityBoardSummaryResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/opportunities/board-summary";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: boardSummary.Query) => string;
}
