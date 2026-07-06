import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IConversationCannedReply } from "../../../../../libs/shared/src/types/crm-service/iconversation-canned-reply";
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<IConversationCannedReply.IListQuery>;
    type Output = Primitive<IResponse<IConversationCannedReply.IListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/conversation-canned-replies";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: list.Query) => string;
}
export declare function create(connection: IConnection, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IConversationCannedReply.ICreateBody>;
    type Output = Primitive<IResponse<IConversationCannedReply.IDetailResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/conversation-canned-replies";
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
export declare function update(connection: IConnection, id: string, body: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IConversationCannedReply.IUpdateBody>;
    type Output = Primitive<IResponse<IConversationCannedReply.IDetailResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/conversation-canned-replies/:id";
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
export declare function remove(connection: IConnection, id: string): Promise<remove.Output>;
export declare namespace remove {
    type Output = Primitive<IResponse<IConversationCannedReply.IDeleteResponse>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/crm/conversation-canned-replies/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
