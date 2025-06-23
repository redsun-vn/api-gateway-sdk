import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { EditorJsUrlRequest, EditorJsUploadResponse } from "../../../../../libs/shared/src/types/ifile";
export declare function uploadByUrl(connection: IConnection, body: uploadByUrl.Input): Promise<uploadByUrl.Output>;
export declare namespace uploadByUrl {
    type Input = Resolved<EditorJsUrlRequest>;
    type Output = Primitive<EditorJsUploadResponse>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/editor-js/shop/fetchUrl";
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
