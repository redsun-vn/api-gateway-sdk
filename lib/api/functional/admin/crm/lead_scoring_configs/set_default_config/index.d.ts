import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMLeadScoringConfig } from "../../../../../../libs/shared/src/types/admin-service/crm/lead-scoring-config";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function setDefault(connection: IConnection, data: setDefault.Input): Promise<setDefault.Output>;
export declare namespace setDefault {
    type Input = Resolved<ICRMLeadScoringConfig.ISetDefault>;
    type Output = Primitive<IResponse<ICRMLeadScoringConfig.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/crm/lead-scoring-configs/set-default-config";
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
