import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { IFile } from "../../../../libs/shared/src/types/ifile";
export declare function upload(connection: IConnection, id: number, input: upload.Input): Promise<upload.Output>;
export declare namespace upload {
    type Input = Primitive<IFile.IUpload>;
    type Output = Primitive<IResponse<IFile.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/attachments/shop/:id";
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
    const path: (id: number) => string;
}
export declare function findAll(connection: IConnection, id: number): Promise<findAll.Output>;
export declare namespace findAll {
    type Output = Primitive<IResponse<IResponsePagination<IFile.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/attachments/shop/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: number) => string;
}
