import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMktOsSubscriber } from "../../../../../libs/shared/src/types/crm-service/imkt-os-subscriber";
export declare function list(connection: IConnection): Promise<list.Output>;
export declare namespace list {
    type Output = Primitive<IResponse<IMktOsSubscriber.IImportsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/subscriber-imports";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function create(connection: IConnection, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IMktOsSubscriber.IImportCreateRequest>;
    type Output = Primitive<IResponse<IMktOsSubscriber.IImportCreated>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/subscriber-imports";
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
export declare function get(connection: IConnection, id: number): Promise<get.Output>;
export declare namespace get {
    type Output = Primitive<IResponse<IMktOsSubscriber.IImportDetail>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/subscriber-imports/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function rows(connection: IConnection, id: number, body: rows.Input): Promise<rows.Output>;
export declare namespace rows {
    type Input = Resolved<IMktOsSubscriber.IImportRowsRequest>;
    type Output = Primitive<IResponse<IMktOsSubscriber.IImportRowsReceived>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/subscriber-imports/:id/rows";
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
    const path: (id: number) => string;
}
export declare function analyze(connection: IConnection, id: number): Promise<analyze.Output>;
export declare namespace analyze {
    type Output = Primitive<IResponse<IMktOsSubscriber.IImportStep>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/subscriber-imports/:id/analyze";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
export declare function commit(connection: IConnection, id: number): Promise<commit.Output>;
export declare namespace commit {
    type Output = Primitive<IResponse<IMktOsSubscriber.IImportStep>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/subscriber-imports/:id/commit";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
export declare function cancel(connection: IConnection, id: number): Promise<cancel.Output>;
export declare namespace cancel {
    type Output = Primitive<IResponse<IMktOsSubscriber.IImportStep>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/subscriber-imports/:id/cancel";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
