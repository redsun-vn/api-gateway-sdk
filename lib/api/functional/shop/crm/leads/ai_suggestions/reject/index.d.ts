import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmAiAssist } from "../../../../../../../libs/shared/src/types/crm-service/iai-assist";
export declare function rejectLeadSuggestion(connection: IConnection, leadId: number, suggestionId: number, body: rejectLeadSuggestion.Input): Promise<rejectLeadSuggestion.Output>;
export declare namespace rejectLeadSuggestion {
    type Input = Resolved<ICrmAiAssist.IRejectBody>;
    type Output = Primitive<IResponse<ICrmAiAssist.IDecisionResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/leads/:leadId/ai-suggestions/:suggestionId/reject";
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
    const path: (leadId: number, suggestionId: number) => string;
}
