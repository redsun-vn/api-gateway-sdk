import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiCreditPackage, IAiPaginationResult } from "../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export * as purchases from "./purchases";
export declare function list(connection: IConnection, query: list.Query): Promise<list.Output>;
export declare namespace list {
    type Query = Resolved<IAiCreditPackage.IQueryRequest>;
    type Output = Primitive<IResponse<IAiPaginationResult<IAiCreditPackage.ICreditPackage>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/ai/credit-packages";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: list.Query) => string;
}
export declare function getById(connection: IConnection, id: number): Promise<getById.Output>;
export declare namespace getById {
    type Output = Primitive<IResponse<IAiCreditPackage.ICreditPackage>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/ai/credit-packages/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IAiCreditPackage.ICreateRequest>;
    type Output = Primitive<IResponse<IAiCreditPackage.ICreditPackage>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/ai/credit-packages";
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
export declare function update(connection: IConnection, id: number, data: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IAiCreditPackage.IUpdateRequest>;
    type Output = Primitive<IResponse<IAiCreditPackage.ICreditPackage>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/ai/credit-packages/:id";
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
    type Output = Primitive<IResponse<IAiCreditPackage.IDeleteResponse>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/admin/ai/credit-packages/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function toggle(connection: IConnection, id: number): Promise<toggle.Output>;
export declare namespace toggle {
    type Output = Primitive<IResponse<IAiCreditPackage.ICreditPackage>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/admin/ai/credit-packages/:id/toggle";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
