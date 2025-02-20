import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAdminWarehouse } from "../../../../libs/shared/src/types/admin-service/device/iwarehouse.type";
import type { IResponse, IQuery, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
export declare function createWarehouse(connection: IConnection, createWarehouseDto: createWarehouse.Input): Promise<createWarehouse.Output>;
export declare namespace createWarehouse {
    type Input = Resolved<IAdminWarehouse.ICreate>;
    type Output = Primitive<IResponse<IAdminWarehouse.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/warehouses";
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
export declare function updateWarehouse(connection: IConnection, warehouseId: string, updateWarehouseDto: updateWarehouse.Input): Promise<updateWarehouse.Output>;
export declare namespace updateWarehouse {
    type Input = Resolved<IAdminWarehouse.IUpdate>;
    type Output = Primitive<IResponse<IAdminWarehouse.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/warehouses/:warehouseId";
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
    const path: (warehouseId: string) => string;
}
export declare function getWarehouse(connection: IConnection, warehouseId: string): Promise<getWarehouse.Output>;
export declare namespace getWarehouse {
    type Output = Primitive<IResponse<IAdminWarehouse.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/warehouses/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (warehouseId: string) => string;
}
export declare function deleteWarehouse(connection: IConnection, warehouseId: string): Promise<deleteWarehouse.Output>;
export declare namespace deleteWarehouse {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/admin/warehouses/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (warehouseId: string) => string;
}
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IAdminWarehouse.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/warehouses";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
