import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ICrmNotificationPreference } from "../../../../../libs/shared/src/types/crm-service/inotification-preference";
export declare function find(connection: IConnection): Promise<find.Output>;
export declare namespace find {
    type Output = Primitive<IResponse<ICrmNotificationPreference.IPreference>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/notification-preferences";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function update(connection: IConnection, body: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<ICrmNotificationPreference.IUpdateBody>;
    type Output = Primitive<IResponse<ICrmNotificationPreference.IPreference>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/notification-preferences";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
