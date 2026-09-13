import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmAiAssist } from "../../../../../../../libs/shared/src/types/crm-service/iai-assist";
export declare function revertLeadSuggestion(connection: IConnection, leadId: number, suggestionId: number): Promise<revertLeadSuggestion.Output>;
export declare namespace revertLeadSuggestion {
    type Output = Primitive<IResponse<ICrmAiAssist.IDecisionResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/leads/:leadId/ai-suggestions/:suggestionId/revert";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (leadId: number, suggestionId: number) => string;
}
