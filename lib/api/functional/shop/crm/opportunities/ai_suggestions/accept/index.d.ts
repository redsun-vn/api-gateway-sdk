import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmAiAssist } from "../../../../../../../libs/shared/src/types/crm-service/iai-assist";
export declare function acceptOpportunitySuggestion(connection: IConnection, opportunityId: number, suggestionId: number, body: acceptOpportunitySuggestion.Input): Promise<acceptOpportunitySuggestion.Output>;
export declare namespace acceptOpportunitySuggestion {
    type Input = Resolved<ICrmAiAssist.IAcceptBody>;
    type Output = Primitive<IResponse<ICrmAiAssist.IDecisionResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/opportunities/:opportunityId/ai-suggestions/:suggestionId/accept";
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
