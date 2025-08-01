import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMKPI } from "../../../../../libs/shared/src/types/admin-service/crm/crm-kpi";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function updateProgress(connection: IConnection, id: string, data: updateProgress.Input): Promise<updateProgress.Output>;
export declare namespace updateProgress {
    type Input = Resolved<ICRMKPI.IUpdateProgressRequest>;
    type Output = Primitive<IResponse<ICRMKPI.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/crm-kpis/:id/progress";
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
    const path: (id: string) => string;
}
