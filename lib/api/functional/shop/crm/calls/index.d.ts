import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICall } from "../../../../../libs/shared/src/types/crm-service/icall";
import type { IStringeeEnvelope } from "../../../../../modules/crm-service/stringee-config-resource/stringee-config-envelope";
export * as softphone from "./softphone";
export * as client_token from "./client_token";
export * as wrap_up from "./wrap_up";
export * as history from "./history";
export declare function place(connection: IConnection, body: place.Input): Promise<place.Output>;
export declare namespace place {
    type Input = Resolved<ICall.IPlaceRequest>;
    type Output = Primitive<IStringeeEnvelope<ICall.IPlaceResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/calls/place";
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
    const path: () => string;
}
export declare function dial(connection: IConnection, body: dial.Input): Promise<dial.Output>;
export declare namespace dial {
    type Input = Resolved<ICall.IDialRequest>;
    type Output = Primitive<IStringeeEnvelope<ICall.IPlaceResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/calls/dial";
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
    const path: () => string;
}
export declare function lookup(connection: IConnection, body: lookup.Input): Promise<lookup.Output>;
export declare namespace lookup {
    type Input = Resolved<ICall.ILookupRequest>;
    type Output = Primitive<IStringeeEnvelope<ICall.ILookupResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/calls/lookup";
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
    const path: () => string;
}
export declare function recent(connection: IConnection, query: recent.Query): Promise<recent.Output>;
export declare namespace recent {
    type Query = Resolved<ICall.IRecentQuery>;
    type Output = Primitive<IStringeeEnvelope<ICall.IRecentResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/calls/recent";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: recent.Query) => string;
}
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<ICall.IListQuery>;
    type Output = Primitive<IStringeeEnvelope<ICall.IListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/calls";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: list.Query) => string;
}
