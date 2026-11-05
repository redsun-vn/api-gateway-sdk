import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMktOsSubscriber } from "../../../../../libs/shared/src/types/crm-service/imkt-os-subscriber";
export declare function lists(connection: IConnection, query: lists.Query): Promise<lists.Output>;
export declare namespace lists {
    type Query = Resolved<IMktOsSubscriber.IListsQuery>;
    type Output = Primitive<IResponse<IMktOsSubscriber.IListsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/subscriber-lists";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: lists.Query) => string;
}
export declare function createList(connection: IConnection, body: createList.Input): Promise<createList.Output>;
export declare namespace createList {
    type Input = Resolved<IMktOsSubscriber.IListRequest>;
    type Output = Primitive<IResponse<IMktOsSubscriber.IList>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/subscriber-lists";
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
export declare function updateList(connection: IConnection, id: number, body: updateList.Input): Promise<updateList.Output>;
export declare namespace updateList {
    type Input = Resolved<IMktOsSubscriber.IListRequest>;
    type Output = Primitive<IResponse<IMktOsSubscriber.IList>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/subscriber-lists/:id";
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
    const path: (id: number) => string;
}
export declare function archiveList(connection: IConnection, id: number): Promise<archiveList.Output>;
export declare namespace archiveList {
    type Output = Primitive<IResponse<IMktOsSubscriber.IList>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/mkt-os/subscriber-lists/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
