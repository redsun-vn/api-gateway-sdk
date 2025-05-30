import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IQuery, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IFile } from "../../../../../libs/shared/src/types/ifile";
export * as hard from "./hard";
export declare function upload(connection: IConnection, input: upload.Input): Promise<upload.Output>;
export declare namespace upload {
    type Input = Resolved<IFile.IAdminReqUpload>;
    type Output = Primitive<IResponse<IFile.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/attachments/admin/files";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IFile.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/attachments/admin/files";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IFile.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/attachments/admin/files/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/attachments/admin/files/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
