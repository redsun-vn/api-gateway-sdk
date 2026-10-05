import type { IConnection, Primitive } from "@nestia/fetcher";
export declare function errorFile(connection: IConnection, importId: string): Promise<errorFile.Output>;
export declare namespace errorFile {
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/product/import/:importId/error-file";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (importId: string) => string;
}
