import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICskhEmailConfig } from "../../../../../libs/shared/src/types/admin-service/icskh-email-config";
import type { IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
export declare function queryLogs(connection: IConnection, query: queryLogs.Query): Promise<queryLogs.Output>;
export declare namespace queryLogs {
    type Query = Resolved<ICskhEmailConfig.ISendLogQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ICskhEmailConfig.ISendLogView>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/cskh-email/logs";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: queryLogs.Query) => string;
}
