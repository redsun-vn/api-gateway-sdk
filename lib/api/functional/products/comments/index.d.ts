import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { IComment } from "../../../../libs/shared/src/types/icomment";
export declare function findAllComment(connection: IConnection, query: findAllComment.Query): Promise<findAllComment.Output>;
export declare namespace findAllComment {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IComment.ICommentResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/products/comments";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllComment.Query) => string;
}
