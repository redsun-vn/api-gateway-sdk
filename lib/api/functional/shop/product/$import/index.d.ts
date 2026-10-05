import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IProductImport } from "../../../../../libs/shared/src/types/product-service/iproduct-import";
export * as preview from "./preview";
export * as error_file from "./error_file";
export declare function status(connection: IConnection, importId: string): Promise<status.Output>;
export declare namespace status {
    type Output = Primitive<IResponse<IProductImport.IStatus>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/product/import/:importId/status";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (importId: string) => string;
}
export declare function commit(connection: IConnection, importId: string): Promise<commit.Output>;
export declare namespace commit {
    type Output = Primitive<IResponse<IProductImport.ICommitResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/product/import/:importId/commit";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (importId: string) => string;
}
