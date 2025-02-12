import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { IComment } from "../../../../libs/shared/src/types/icomment";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IComment.ICommentResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/comments";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function createComment(connection: IConnection, createCommentDto: createComment.Input): Promise<createComment.Output>;
export declare namespace createComment {
    type Input = Resolved<IComment.ICreatePublic>;
    type Output = Primitive<IResponse<IComment.ICommentResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/comments";
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
