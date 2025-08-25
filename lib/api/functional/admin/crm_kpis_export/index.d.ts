import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMKPI } from "../../../../libs/shared/src/types/admin-service/crm/crm-kpi";
export declare function getExportKpi(connection: IConnection, query: getExportKpi.Query): Promise<getExportKpi.Output>;
export declare namespace getExportKpi {
    type Query = Resolved<ICRMKPI.IQueryExportKPI>;
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm-kpis-export";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getExportKpi.Query) => string;
}
