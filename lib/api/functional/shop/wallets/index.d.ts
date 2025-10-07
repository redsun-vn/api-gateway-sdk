import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IQuery, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { IWallet } from "../../../../libs/shared/src/types/loyalty-service/iwallet";
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IWallet.ICreateFromPOSShop>;
    type Output = Primitive<IResponse<IWallet.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/wallets";
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
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IWallet.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/wallets";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: list.Query) => string;
}
export declare function update(connection: IConnection, uuid: string, data: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IWallet.IUpdate>;
    type Output = Primitive<IResponse<IWallet.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/wallets/:uuid";
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
    const path: (uuid: string) => string;
}
export declare function $delete(connection: IConnection, uuid: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/wallets/:uuid";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (uuid: string) => string;
}
