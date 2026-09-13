import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmAiAssist } from "../../../../../../libs/shared/src/types/crm-service/iai-assist";
export declare function opportunitySummary(connection: IConnection, opportunityId: number): Promise<opportunitySummary.Output>;
export declare namespace opportunitySummary {
    type Output = Primitive<IResponse<ICrmAiAssist.ISummaryResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/opportunities/:opportunityId/ai-summary";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (opportunityId: number) => string;
}
