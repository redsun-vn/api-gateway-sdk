import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMLead } from "../../../../../libs/shared/src/types/admin-service/crm/lead";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export * as scoring from "./scoring";
export * as source from "./source";
export * as status from "./status";
export * as assignment from "./assignment";
export * as auto_assign from "./auto_assign";
export * as convert_to_deal from "./convert_to_deal";
export * as assign_user from "./assign_user";
export * as bant_score from "./bant_score";
export * as bant_follow_up_urgent from "./bant_follow_up_urgent";
export declare function $import(connection: IConnection, data: $import.Input): Promise<$import.Output>;
export declare namespace $import {
    type Input = Resolved<ICRMLead.IImport>;
    type Output = Primitive<IResponse<ICRMLead.IImportResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/crm/leads-analytics/import";
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
