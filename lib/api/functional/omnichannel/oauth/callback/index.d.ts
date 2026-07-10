import type { IConnection } from "@nestia/fetcher";
export declare function oauthCallback(connection: IConnection, code: string, state: string): Promise<void>;
export declare namespace oauthCallback {
    const METADATA: {
        readonly method: "GET";
        readonly path: "/omnichannel/oauth/callback";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (code: string, state: string) => string;
}
