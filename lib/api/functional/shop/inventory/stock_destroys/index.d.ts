import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IStockDestroy } from "../../../../../libs/shared/src/types/inventory-service/istock-destroy.type";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IStockDestroy.IStockDestroyResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/stock-destroys";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IStockDestroy.IStockDestroyResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/stock-destroys/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function create(connection: IConnection, input: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IStockDestroy.ICreateStockDestroy>;
    type Output = Primitive<IResponse<IStockDestroy.IStockDestroyResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/stock-destroys";
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
export declare function update(connection: IConnection, id: string, input: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IStockDestroy.IUpdateStockDestroy>;
    type Output = Primitive<IResponse<IStockDestroy.IStockDestroyResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/inventory/stock-destroys/:id";
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
export declare function submit(connection: IConnection, id: string): Promise<submit.Output>;
export declare namespace submit {
    type Output = Primitive<IResponse<IStockDestroy.IStockDestroyResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/stock-destroys/:id/submit";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
export declare function approve(connection: IConnection, id: string): Promise<approve.Output>;
export declare namespace approve {
    type Output = Primitive<IResponse<IStockDestroy.IStockDestroyResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/stock-destroys/:id/approve";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
export declare function reject(connection: IConnection, id: string, input: reject.Input): Promise<reject.Output>;
export declare namespace reject {
    type Input = Resolved<IStockDestroy.IRejectStockDestroyBody>;
    type Output = Primitive<IResponse<IStockDestroy.IStockDestroyResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/stock-destroys/:id/reject";
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
    const path: (id: string) => string;
}
export declare function execute(connection: IConnection, id: string): Promise<execute.Output>;
export declare namespace execute {
    type Output = Primitive<IResponse<IStockDestroy.IStockDestroyResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/stock-destroys/:id/execute";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
export declare function cancel(connection: IConnection, id: string): Promise<cancel.Output>;
export declare namespace cancel {
    type Output = Primitive<IResponse<IStockDestroy.IStockDestroyResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/stock-destroys/:id/cancel";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/inventory/stock-destroys/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
