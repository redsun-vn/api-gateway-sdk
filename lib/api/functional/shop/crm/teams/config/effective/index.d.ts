import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmTeam } from "../../../../../../../libs/shared/src/types/crm-service/iteam";
export declare function getEffectiveConfig(connection: IConnection, query: getEffectiveConfig.Query): Promise<getEffectiveConfig.Output>;
export declare namespace getEffectiveConfig {
    type Query = Resolved<ICrmTeam.IEffectiveTeamConfigQuery>;
    type Output = Primitive<IResponse<ICrmTeam.IEffectiveTeamConfigResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/teams/config/effective";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getEffectiveConfig.Query) => string;
}
