import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMLead } from "../../../../../../libs/shared/src/types/admin-service/crm/lead";
import type { IQuery, IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function analyticsScoring(connection: IConnection, query: analyticsScoring.Query): Promise<analyticsScoring.Output>;
export declare namespace analyticsScoring {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<ICRMLead.IAnalyticsScoringResult>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm/leads-analytics/scoring";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: analyticsScoring.Query) => string;
}
