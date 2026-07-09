import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IResponsePagination } from "../../../../../../libs/shared/src/types/common.type";
import type { ILeadWebhook } from "../../../../../../libs/shared/src/types/crm-service/ilead-webhook";
export declare function listSyncLog(connection: IConnection, query: listSyncLog.Query): Promise<listSyncLog.Output>;
export declare namespace listSyncLog {
    type Query = Resolved<ILeadWebhook.ISyncLogListQueryRequest>;
    type Output = Primitive<IResponse<IResponsePagination<ILeadWebhook.ISyncLogItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/lead-webhook/sync-log";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listSyncLog.Query) => string;
}
