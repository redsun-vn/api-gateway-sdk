import type { IConnection } from "@nestia/fetcher";
export declare function oauthCallback(connection: IConnection, code: string, oaId: string, state: string): Promise<void>;
export declare namespace oauthCallback {
    const METADATA: {
        readonly method: "GET";
        readonly path: "/zalo-oa/oauth/callback";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (code: string, oaId: string, state: string) => string;
}
