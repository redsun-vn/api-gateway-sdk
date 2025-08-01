import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMKPI } from "../../../../libs/shared/src/types/admin-service/crm/crm-kpi";
import type { IQuery, IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function getTeamKPIs(connection: IConnection, query: getTeamKPIs.Query): Promise<getTeamKPIs.Output>;
export declare namespace getTeamKPIs {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<ICRMKPI.IDashboardAnalytics>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm-kpis-analytics";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getTeamKPIs.Query) => string;
}
