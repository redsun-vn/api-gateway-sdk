import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmTeam } from "../../../../../../libs/shared/src/types/crm-service/iteam";
export declare function updateMembers(connection: IConnection, body: updateMembers.Input): Promise<updateMembers.Output>;
export declare namespace updateMembers {
    type Input = Resolved<ICrmTeam.IMembersUpdateRequest>;
    type Output = Primitive<IResponse<ICrmTeam.IMembersResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/teams/members";
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
