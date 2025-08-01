import type { IConnection, Primitive } from "@nestia/fetcher";
import type { ICRMKPI } from "../../../../libs/shared/src/types/admin-service/crm/crm-kpi";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function getStats(connection: IConnection): Promise<getStats.Output>;
export declare namespace getStats {
    type Output = Primitive<IResponse<Array<ICRMKPI.IKPIStats>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm-kpis-stats";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
