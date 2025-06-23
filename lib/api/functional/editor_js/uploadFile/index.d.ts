import type { IConnection, Primitive } from "@nestia/fetcher";
import type { EditorJsUploadResponse } from "../../../../libs/shared/src/types/ifile";
export declare function uploadByFile(connection: IConnection): Promise<uploadByFile.Output>;
export declare namespace uploadByFile {
    type Output = Primitive<EditorJsUploadResponse>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/editor-js/uploadFile";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
