import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMLeadScoringConfig } from "../../../../../../libs/shared/src/types/admin-service/crm/lead-scoring-config";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function activateConfig(connection: IConnection, data: activateConfig.Input): Promise<activateConfig.Output>;
export declare namespace activateConfig {
    type Input = Resolved<ICRMLeadScoringConfig.IActivate>;
    type Output = Primitive<IResponse<ICRMLeadScoringConfig.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/crm/lead-scoring-configs/activate-config";
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
    const path: () => string;
}
