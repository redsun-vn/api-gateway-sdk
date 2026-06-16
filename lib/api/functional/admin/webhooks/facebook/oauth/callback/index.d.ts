import type { IConnection } from "@nestia/fetcher";
export declare function handleCallback(connection: IConnection, code: undefined | string, state: undefined | string, error: undefined | string): Promise<void>;
export declare namespace handleCallback {
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/webhooks/facebook/oauth/callback";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (code: undefined | string, state: undefined | string, error: undefined | string) => string;
}
