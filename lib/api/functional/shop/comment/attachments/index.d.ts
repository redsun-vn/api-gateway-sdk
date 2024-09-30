import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ICommentAttachment } from "../../../../../libs/shared/src/types/icomment.attachment";
export declare function findAll(connection: IConnection, commentId: string): Promise<findAll.Output>;
export declare namespace findAll {
    type Output = Primitive<IResponse<Array<ICommentAttachment.ICommentAttachmentResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/comment/:commentId/attachments";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (commentId: string) => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<ICommentAttachment.ICommentAttachmentResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/comment/attachments/:id";
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
        readonly path: "/shop/comment/attachments/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ICommentAttachment.ICreate>;
    type Output = Primitive<IResponse<ICommentAttachment.ICommentAttachmentResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/comment/attachments";
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
export declare function update(connection: IConnection, data: update.Input, id: string): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<ICommentAttachment.IUpdate>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/comment/attachments/:id";
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
    const path: (id: string) => string;
}
