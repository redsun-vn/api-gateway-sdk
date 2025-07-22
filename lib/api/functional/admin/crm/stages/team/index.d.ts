import type { IConnection, Primitive } from "@nestia/fetcher";
import type { ICrmStage } from "../../../../../../libs/shared/src/types/admin-service/crm/crm-stage";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function findByTeam(connection: IConnection, teamId: string): Promise<findByTeam.Output>;
export declare namespace findByTeam {
    type Output = Primitive<IResponse<Array<ICrmStage.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm/stages/team/:teamId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (teamId: string) => string;
}
