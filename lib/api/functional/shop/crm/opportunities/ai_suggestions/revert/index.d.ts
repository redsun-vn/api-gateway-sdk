import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmAiAssist } from "../../../../../../../libs/shared/src/types/crm-service/iai-assist";
export declare function revertOpportunitySuggestion(connection: IConnection, opportunityId: number, suggestionId: number): Promise<revertOpportunitySuggestion.Output>;
export declare namespace revertOpportunitySuggestion {
    type Output = Primitive<IResponse<ICrmAiAssist.IDecisionResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/opportunities/:opportunityId/ai-suggestions/:suggestionId/revert";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (opportunityId: number, suggestionId: number) => string;
}
