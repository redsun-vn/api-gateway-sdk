import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { ISocialPost } from "../../../../../../../libs/shared/src/types/ads-service/isocial-post";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function settings(connection: IConnection): Promise<settings.Output>;
export declare namespace settings {
    type Output = Primitive<IResponse<ISocialPost.ISettingView>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/posts/settings";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function updateSettings(connection: IConnection, body: updateSettings.Input): Promise<updateSettings.Output>;
export declare namespace updateSettings {
    type Input = Resolved<ISocialPost.ISettingUpdate>;
    type Output = Primitive<IResponse<ISocialPost.ISettingView>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/social/posts/settings";
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
