import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IStockTransfer } from "../../../../../libs/shared/src/types/inventory-service/istock-transfer.type";
export * as send from "./send";
export * as receive from "./receive";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IStockTransfer.IStockTransferResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/stock-transfers";
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
    type Output = Primitive<IResponse<IStockTransfer.IStockTransferResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/stock-transfers/:id";
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
    type Input = Resolved<IStockTransfer.ICreateStockTransfer>;
    type Output = Primitive<IResponse<IStockTransfer.IStockTransferResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/stock-transfers";
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
    type Input = Resolved<IStockTransfer.IUpdateStockTransfer>;
    type Output = Primitive<IResponse<IStockTransfer.IStockTransferResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/inventory/stock-transfers/:id";
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
export declare function confirm(connection: IConnection, id: string): Promise<confirm.Output>;
export declare namespace confirm {
    type Output = Primitive<IResponse<IStockTransfer.IStockTransferResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/stock-transfers/:id/confirm";
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
    type Output = Primitive<IResponse<IStockTransfer.IStockTransferResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/stock-transfers/:id/cancel";
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
        readonly path: "/shop/inventory/stock-transfers/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
