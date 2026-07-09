import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmDashboard } from "../../../../../../libs/shared/src/types/crm-service/idashboard";
export declare function leadScoringDistribution(connection: IConnection, query: leadScoringDistribution.Query): Promise<leadScoringDistribution.Output>;
export declare namespace leadScoringDistribution {
    type Query = Resolved<ICrmDashboard.IDateRangeQuery>;
    type Output = Primitive<IResponse<ICrmDashboard.ILeadScoringDistributionResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/dashboard/lead-scoring-distribution";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: leadScoringDistribution.Query) => string;
}
