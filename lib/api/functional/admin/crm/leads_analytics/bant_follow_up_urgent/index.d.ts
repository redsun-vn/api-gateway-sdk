import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMLead } from "../../../../../../libs/shared/src/types/admin-service/crm/lead";
import type { IQuery, IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function getUrgentFollowUpLeads(connection: IConnection, query: getUrgentFollowUpLeads.Query): Promise<getUrgentFollowUpLeads.Output>;
export declare namespace getUrgentFollowUpLeads {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<ICRMLead.IBANTFollowUpUrgentResult>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm/leads-analytics/bant-follow-up-urgent";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getUrgentFollowUpLeads.Query) => string;
}
