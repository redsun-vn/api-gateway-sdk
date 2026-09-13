import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmAiAssist } from "../../../../../../../libs/shared/src/types/crm-service/iai-assist";
export declare function acceptLeadSuggestion(connection: IConnection, leadId: number, suggestionId: number, body: acceptLeadSuggestion.Input): Promise<acceptLeadSuggestion.Output>;
export declare namespace acceptLeadSuggestion {
    type Input = Resolved<ICrmAiAssist.IAcceptBody>;
    type Output = Primitive<IResponse<ICrmAiAssist.IDecisionResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/leads/:leadId/ai-suggestions/:suggestionId/accept";
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
