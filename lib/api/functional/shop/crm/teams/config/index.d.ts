import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmTeam } from "../../../../../../libs/shared/src/types/crm-service/iteam";
export * as effective from "./effective";
export declare function updateConfig(connection: IConnection, body: updateConfig.Input): Promise<updateConfig.Output>;
export declare namespace updateConfig {
    type Input = Resolved<ICrmTeam.IConfigUpdateRequest>;
    type Output = Primitive<IResponse<ICrmTeam.IEffectiveTeamConfigResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/teams/config";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
