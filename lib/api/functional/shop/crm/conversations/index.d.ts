import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IConversation } from "../../../../../libs/shared/src/types/crm-service/iconversation";
import type { IConversationSearch } from "../../../../../libs/shared/src/types/crm-service/iconversation-search";
export * as reply from "./reply";
export * as read from "./read";
export * as assign from "./assign";
export * as attachments from "./attachments";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IConversation.IListQuery>;
    type Output = Primitive<IResponse<IConversation.IListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/conversations";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function counts(connection: IConnection): Promise<counts.Output>;
export declare namespace counts {
    type Output = Primitive<IResponse<IConversation.ICountsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/conversations/counts";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function search(connection: IConnection, query: search.Query): Promise<search.Output>;
export declare namespace search {
    type Query = Resolved<IConversationSearch.ISearchQuery>;
    type Output = Primitive<IResponse<IConversationSearch.ISearchResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/conversations/search";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: search.Query) => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IConversation.IDetailResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/conversations/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function initiate(connection: IConnection, body: initiate.Input): Promise<initiate.Output>;
export declare namespace initiate {
    type Input = Resolved<IConversation.IInitiateBody>;
    type Output = Primitive<IResponse<IConversation.IInitiateResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/conversations/initiate";
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
