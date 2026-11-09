import type { IConnection, Resolved } from "@nestia/fetcher";
import type { AdsOAuthCallbackQuery } from "../../../../libs/shared/src/types/ads-service/iads-oauth";
export declare function callback(connection: IConnection, platform: string, query: callback.Query): Promise<void>;
export declare namespace callback {
    type Query = Resolved<AdsOAuthCallbackQuery>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/ads/:platform/oauth/callback";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (platform: string, query: callback.Query) => string;
}
