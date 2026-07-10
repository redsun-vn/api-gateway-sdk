import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmLead } from "../../../../../../libs/shared/src/types/crm-service/ilead";
export declare function assignTeam(connection: IConnection, body: assignTeam.Input): Promise<assignTeam.Output>;
export declare namespace assignTeam {
    type Input = Resolved<ICrmLead.IAssignTeam>;
    type Output = Primitive<IResponse<ICrmLead.IAssignTeamResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/leads/team";
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
