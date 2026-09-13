import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmAiAssist } from "../../../../../../../libs/shared/src/types/crm-service/iai-assist";
export declare function rejectOpportunitySuggestion(connection: IConnection, opportunityId: number, suggestionId: number, body: rejectOpportunitySuggestion.Input): Promise<rejectOpportunitySuggestion.Output>;
export declare namespace rejectOpportunitySuggestion {
    type Input = Resolved<ICrmAiAssist.IRejectBody>;
    type Output = Primitive<IResponse<ICrmAiAssist.IDecisionResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/opportunities/:opportunityId/ai-suggestions/:suggestionId/reject";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (opportunityId: number, suggestionId: number) => string;
}
