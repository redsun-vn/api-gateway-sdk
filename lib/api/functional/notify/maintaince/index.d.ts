import type { IConnection, Primitive } from "@nestia/fetcher";
import type { INotify } from "../../../../libs/shared/src/types/admin-service/inotify";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function findNotifyMaintance(connection: IConnection): Promise<findNotifyMaintance.Output>;
export declare namespace findNotifyMaintance {
    type Output = Primitive<IResponse<INotify.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/notify/maintaince";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
