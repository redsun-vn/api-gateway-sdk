import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMktOsAudience } from "../../../../../libs/shared/src/types/crm-service/imkt-os-audience";
import type { IMktOsRun } from "../../../../../libs/shared/src/types/crm-service/imkt-os-run";
export * as preview from "./preview";
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<IMktOsAudience.IListQuery>;
    type Output = Primitive<IResponse<IMktOsAudience.IListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/audiences";
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
    type Input = Resolved<IMktOsAudience.ICreateRequest>;
    type Output = Primitive<IResponse<IMktOsAudience.ICreated>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/audiences";
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
export declare function fields(connection: IConnection, query: fields.Query): Promise<fields.Output>;
export declare namespace fields {
    type Query = Resolved<IMktOsAudience.IFieldsQuery>;
    type Output = Primitive<IResponse<IMktOsAudience.IFieldsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/audiences/fields";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: fields.Query) => string;
}
export declare function journeys(connection: IConnection, id: number): Promise<journeys.Output>;
export declare namespace journeys {
    type Output = Primitive<IResponse<IMktOsRun.IAudienceJourneysResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/audiences/:id/journeys";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function get(connection: IConnection, id: number): Promise<get.Output>;
export declare namespace get {
    type Output = Primitive<IResponse<IMktOsAudience.IGetResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/audiences/:id";
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
    type Input = Resolved<IMktOsAudience.IUpdateRequest>;
    type Output = Primitive<IResponse<IMktOsAudience.IUpdated>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/audiences/:id";
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
export declare function archive(connection: IConnection, id: number): Promise<archive.Output>;
export declare namespace archive {
    type Output = Primitive<IResponse<IMktOsAudience.IArchived>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/mkt-os/audiences/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
