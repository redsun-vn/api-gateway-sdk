import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IGroupWarehouse } from "../../../../../libs/shared/src/types/inventory-service/igroup-warehouse.type";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IGroupWarehouse.IGroupWarehouseResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/group-warehouses";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (query: findAll.Query) => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IGroupWarehouse.IGroupWarehouseResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/group-warehouses/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
export declare function create(connection: IConnection, input: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Primitive<IGroupWarehouse.ICreateGroupWarehouse>;
    type Output = Primitive<IResponse<IGroupWarehouse.IGroupWarehouseResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/group-warehouses";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
export declare function update(connection: IConnection, id: string, input: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Primitive<IGroupWarehouse.IUpdateGroupWarehouse>;
    type Output = Primitive<IResponse<IGroupWarehouse.IGroupWarehouseResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/inventory/group-warehouses/:id";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/inventory/group-warehouses/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
