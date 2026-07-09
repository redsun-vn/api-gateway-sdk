import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmLead } from "../../../../../../libs/shared/src/types/crm-service/ilead";
export declare function scoreBreakdown(connection: IConnection, id: number): Promise<scoreBreakdown.Output>;
export declare namespace scoreBreakdown {
    type Output = Primitive<IResponse<ICrmLead.IScoreRecomputeResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/leads/:id/score-breakdown";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
