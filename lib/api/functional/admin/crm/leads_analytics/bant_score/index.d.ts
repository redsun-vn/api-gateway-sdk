import type { IConnection, Primitive } from "@nestia/fetcher";
import type { ICRMLead } from "../../../../../../libs/shared/src/types/admin-service/crm/lead";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function getLeadBANTScore(connection: IConnection, id: string): Promise<getLeadBANTScore.Output>;
export declare namespace getLeadBANTScore {
    type Output = Primitive<IResponse<ICRMLead.IBANTSummary>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm/leads-analytics/bant-score/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
