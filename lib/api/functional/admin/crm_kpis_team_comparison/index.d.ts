import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMKPI } from "../../../../libs/shared/src/types/admin-service/crm/crm-kpi";
import type { IQuery, IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function getTeamComparison(connection: IConnection, query: getTeamComparison.Query): Promise<getTeamComparison.Output>;
export declare namespace getTeamComparison {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<Array<ICRMKPI.ITeamComparison>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm-kpis-team-comparison";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getTeamComparison.Query) => string;
}
