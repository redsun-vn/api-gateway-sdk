import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IFile } from "../../../../../libs/shared/src/types/ifile";
export declare function upload(connection: IConnection, input: upload.Input): Promise<upload.Output>;
export declare namespace upload {
    type Input = Primitive<IFile.IReqUpload>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/product/import";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
