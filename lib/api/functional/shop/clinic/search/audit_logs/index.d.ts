import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../../libs/shared/src/types/common.type";
import type { IClinicAuditLog } from "../../../../../../libs/shared/src/types/partner-service/iclinic-audit-log";
export declare function searchAuditLogs(connection: IConnection, query: searchAuditLogs.Query): Promise<searchAuditLogs.Output>;
export declare namespace searchAuditLogs {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IClinicAuditLog.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/clinic/search/audit-logs";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: searchAuditLogs.Query) => string;
}
