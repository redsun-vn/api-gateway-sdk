import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../libs/shared/src/types/common.type";
import type { IComment } from "../../../libs/shared/src/types/icomment";
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Primitive<IComment.ICreatePublic>;
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
        readonly status: null;
    };
    const path: () => string;
}
