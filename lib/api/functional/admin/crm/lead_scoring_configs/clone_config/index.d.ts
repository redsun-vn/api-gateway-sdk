import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMLeadScoringConfig } from "../../../../../../libs/shared/src/types/admin-service/crm/lead-scoring-config";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function cloneConfig(connection: IConnection, data: cloneConfig.Input): Promise<cloneConfig.Output>;
export declare namespace cloneConfig {
    type Input = Resolved<ICRMLeadScoringConfig.ICloneConfig>;
    type Output = Primitive<IResponse<ICRMLeadScoringConfig.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/crm/lead-scoring-configs/clone-config";
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
