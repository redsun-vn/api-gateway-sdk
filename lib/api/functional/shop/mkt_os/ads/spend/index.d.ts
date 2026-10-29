import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAdsSpend } from "../../../../../../libs/shared/src/types/ads-service/iads-spend";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<IAdsSpend.IListQuery>;
    type Output = Primitive<IResponse<IAdsSpend.IPage>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/ads/spend";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: list.Query) => string;
}
export declare function manualUpsert(connection: IConnection, body: manualUpsert.Input): Promise<manualUpsert.Output>;
export declare namespace manualUpsert {
    type Input = Resolved<IAdsSpend.IManualUpsert>;
    type Output = Primitive<IResponse<IAdsSpend.IWriteResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/ads/spend";
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
export declare function $import(connection: IConnection, body: $import.Input): Promise<$import.Output>;
export declare namespace $import {
    type Input = Resolved<IAdsSpend.IImport>;
    type Output = Primitive<IResponse<IAdsSpend.IImportResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/ads/spend/import";
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
export declare function $delete(connection: IConnection, query: $delete.Query): Promise<$delete.Output>;
export declare namespace $delete {
    type Query = Resolved<IAdsSpend.IDeleteQuery>;
    type Output = Primitive<IResponse<IAdsSpend.IDeleteResult>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/mkt-os/ads/spend";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: $delete.Query) => string;
}
