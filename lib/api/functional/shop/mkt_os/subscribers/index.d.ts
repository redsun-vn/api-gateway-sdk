import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMktOsSubscriber } from "../../../../../libs/shared/src/types/crm-service/imkt-os-subscriber";
export * as unsubscribes from "./unsubscribes";
export * as bounced from "./bounced";
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<IMktOsSubscriber.IListQuery>;
    type Output = Primitive<IResponse<IMktOsSubscriber.IListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/subscribers";
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
    type Input = Resolved<IMktOsSubscriber.ICreateRequest>;
    type Output = Primitive<IResponse<IMktOsSubscriber.ICreateResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/subscribers";
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
export declare function $export(connection: IConnection, query: $export.Query): Promise<void>;
export declare namespace $export {
    type Query = Resolved<IMktOsSubscriber.IExportQuery>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/subscribers/export";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: $export.Query) => string;
}
export declare function get(connection: IConnection, id: number): Promise<get.Output>;
export declare namespace get {
    type Output = Primitive<IResponse<IMktOsSubscriber.IDetail>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/subscribers/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function update(connection: IConnection, id: number, body: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IMktOsSubscriber.IUpdateRequest>;
    type Output = Primitive<IResponse<IMktOsSubscriber.IItem>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/subscribers/:id";
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
export declare function $delete(connection: IConnection, id: number): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<IMktOsSubscriber.IDeleted>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/mkt-os/subscribers/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
