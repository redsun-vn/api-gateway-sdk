import type { IConnection, Primitive } from "@nestia/fetcher";
import type { ICRMLead } from "../../../../../../libs/shared/src/types/admin-service/crm/lead";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function autoAssign(connection: IConnection, id: string): Promise<autoAssign.Output>;
export declare namespace autoAssign {
    type Output = Primitive<IResponse<ICRMLead.IAutoAssignResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/crm/leads-analytics/auto-assign/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
