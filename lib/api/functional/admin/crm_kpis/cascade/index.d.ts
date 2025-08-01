import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMKPI } from "../../../../../libs/shared/src/types/admin-service/crm/crm-kpi";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function cascadeKPI(connection: IConnection, id: string, data: cascadeKPI.Input): Promise<cascadeKPI.Output>;
export declare namespace cascadeKPI {
    type Input = Resolved<ICRMKPI.CascadeKPIRequest>;
    type Output = Primitive<IResponse<Array<ICRMKPI.IResponse>>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/crm-kpis/:id/cascade";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
