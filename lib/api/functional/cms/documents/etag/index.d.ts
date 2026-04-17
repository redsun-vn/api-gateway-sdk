import type { IConnection } from "@nestia/fetcher";
export declare function findOneWithEtag(connection: IConnection, id: string): Promise<void>;
export declare namespace findOneWithEtag {
    const METADATA: {
        readonly method: "GET";
        readonly path: "/cms/documents/:id/etag";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
