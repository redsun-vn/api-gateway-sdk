import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMKPI } from "../../../../libs/shared/src/types/admin-service/crm/crm-kpi";
import type { IQuery, IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function getHierarchy(connection: IConnection, query: getHierarchy.Query): Promise<getHierarchy.Output>;
export declare namespace getHierarchy {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<Array<ICRMKPI.IHierarchyResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm-kpis-hierarchy";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getHierarchy.Query) => string;
}
