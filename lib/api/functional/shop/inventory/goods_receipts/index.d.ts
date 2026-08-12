import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IGoodsReceipt } from "../../../../../libs/shared/src/types/inventory-service/igoods-receipt.type";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IGoodsReceipt.IGoodsReceiptResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/goods-receipts";
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
    type Output = Primitive<IResponse<IGoodsReceipt.IGoodsReceiptResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/goods-receipts/:id";
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
    type Input = Resolved<IGoodsReceipt.ICreateGoodsReceipt>;
    type Output = Primitive<IResponse<IGoodsReceipt.IGoodsReceiptResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/goods-receipts";
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
    type Input = Resolved<IGoodsReceipt.IUpdateGoodsReceipt>;
    type Output = Primitive<IResponse<IGoodsReceipt.IGoodsReceiptResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/inventory/goods-receipts/:id";
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
    type Output = Primitive<IResponse<IGoodsReceipt.IGoodsReceiptResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/goods-receipts/:id/confirm";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
export declare function receive(connection: IConnection, id: string, input: receive.Input): Promise<receive.Output>;
export declare namespace receive {
    type Input = Resolved<IGoodsReceipt.IReceiveGoodsReceipt>;
    type Output = Primitive<IResponse<IGoodsReceipt.IGoodsReceiptResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/goods-receipts/:id/receive";
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
export declare function cancel(connection: IConnection, id: string): Promise<cancel.Output>;
export declare namespace cancel {
    type Output = Primitive<IResponse<IGoodsReceipt.IGoodsReceiptResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/goods-receipts/:id/cancel";
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
        readonly path: "/shop/inventory/goods-receipts/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
