import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmFacebook } from "../../../../../../libs/shared/src/types/crm-service/ifacebook";
export * as retry from "./retry";
export declare function listSyncLog(connection: IConnection, query: listSyncLog.Query): Promise<listSyncLog.Output>;
export declare namespace listSyncLog {
    type Query = Resolved<ICrmFacebook.ISyncLogQuery>;
    type Output = Primitive<IResponse<ICrmFacebook.IFbSyncLogListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/facebook/sync-log";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listSyncLog.Query) => string;
}
