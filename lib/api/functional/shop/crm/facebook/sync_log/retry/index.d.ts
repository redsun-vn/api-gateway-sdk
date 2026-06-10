import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmFacebook } from "../../../../../../../libs/shared/src/types/crm-service/ifacebook";
export declare function retrySyncLog(connection: IConnection, id: number): Promise<retrySyncLog.Output>;
export declare namespace retrySyncLog {
    type Output = Primitive<IResponse<ICrmFacebook.IFbSyncLogResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/facebook/sync-log/:id/retry";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
