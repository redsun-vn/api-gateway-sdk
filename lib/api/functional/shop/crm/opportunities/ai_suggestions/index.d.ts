import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmAiAssist } from "../../../../../../libs/shared/src/types/crm-service/iai-assist";
export * as accept from "./accept";
export * as reject from "./reject";
export * as revert from "./revert";
export declare function opportunitySuggestions(connection: IConnection, opportunityId: number): Promise<opportunitySuggestions.Output>;
export declare namespace opportunitySuggestions {
    type Output = Primitive<IResponse<ICrmAiAssist.IFindSuggestionsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/opportunities/:opportunityId/ai-suggestions";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (opportunityId: number) => string;
}
