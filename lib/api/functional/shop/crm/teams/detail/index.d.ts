import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmTeam } from "../../../../../../libs/shared/src/types/crm-service/iteam";
export declare function findOne(connection: IConnection, query: findOne.Query): Promise<findOne.Output>;
export declare namespace findOne {
    type Query = Resolved<ICrmTeam.ITeamQuery>;
    type Output = Primitive<IResponse<ICrmTeam.ITeamResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/teams/detail";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findOne.Query) => string;
}
