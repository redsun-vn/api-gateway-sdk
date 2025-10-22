import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IQuery, IResponsePagination } from "../../../libs/shared/src/types/common.type";
import type { IComment } from "../../../libs/shared/src/types/icomment";
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IComment.ICreatePublic>;
    type Output = Primitive<IResponse<IComment.ICommentResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/comments";
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
    type Output = Primitive<IResponse<IResponsePagination<IComment.ICommentResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/comments";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
