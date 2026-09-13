import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmAiAssist } from "../../../../../../libs/shared/src/types/crm-service/iai-assist";
export declare function leadSummary(connection: IConnection, leadId: number): Promise<leadSummary.Output>;
export declare namespace leadSummary {
    type Output = Primitive<IResponse<ICrmAiAssist.ISummaryResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/leads/:leadId/ai-summary";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (leadId: number) => string;
}
