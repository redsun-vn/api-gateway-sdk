import type { IConnection } from "@nestia/fetcher";
export declare function confirmPage(connection: IConnection): Promise<void>;
export declare namespace confirmPage {
    const METADATA: {
        readonly method: "GET";
        readonly path: "/mkt-os/unsubscribe";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function unsubscribe(connection: IConnection): Promise<void>;
export declare namespace unsubscribe {
    const METADATA: {
        readonly method: "POST";
        readonly path: "/mkt-os/unsubscribe";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
