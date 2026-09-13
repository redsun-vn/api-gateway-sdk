import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmAiAssist } from "../../../../../../libs/shared/src/types/crm-service/iai-assist";
export declare function requestSummary(connection: IConnection, id: number): Promise<requestSummary.Output>;
export declare namespace requestSummary {
    type Output = Primitive<IResponse<ICrmAiAssist.IConversationSummaryResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/conversations/:id/ai-summary";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
export declare function getSummary(connection: IConnection, id: number): Promise<getSummary.Output>;
export declare namespace getSummary {
    type Output = Primitive<IResponse<ICrmAiAssist.IConversationSummaryResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/conversations/:id/ai-summary";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
