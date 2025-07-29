import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMLead } from "../../../../../../libs/shared/src/types/admin-service/crm/lead";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function assignUser(connection: IConnection, data: assignUser.Input): Promise<assignUser.Output>;
export declare namespace assignUser {
    type Input = Resolved<ICRMLead.IAssignUser>;
    type Output = Primitive<IResponse<ICRMLead.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/crm/leads-analytics/assign-user";
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
    const path: () => string;
}
