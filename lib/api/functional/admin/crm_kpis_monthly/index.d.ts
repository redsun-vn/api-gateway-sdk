import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMKPI } from "../../../../libs/shared/src/types/admin-service/crm/crm-kpi";
import type { IQuery, IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function getKPIProgressMonthly(connection: IConnection, query: getKPIProgressMonthly.Query): Promise<getKPIProgressMonthly.Output>;
export declare namespace getKPIProgressMonthly {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<ICRMKPI.IMonthlyProgressResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm-kpis-monthly";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getKPIProgressMonthly.Query) => string;
}
