import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmLead } from "../../../../../../libs/shared/src/types/crm-service/ilead";
export declare function recomputeScore(connection: IConnection, id: number): Promise<recomputeScore.Output>;
export declare namespace recomputeScore {
    type Output = Primitive<IResponse<ICrmLead.IScoreRecomputeResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/leads/:id/recompute-score";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
