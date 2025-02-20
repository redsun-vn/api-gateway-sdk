import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IDeviceCategory } from "../../../../libs/shared/src/types/admin-service/device/idevice-category.type";
import type { IResponse, IQuery, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IDeviceCategory.ICreate>;
    type Output = Primitive<IResponse<IDeviceCategory.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/device-category";
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
export declare function update(connection: IConnection, id: string, data: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IDeviceCategory.IUpdate>;
    type Output = Primitive<IResponse<IDeviceCategory.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/device-category/:id";
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
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IDeviceCategory.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/device-category/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IDeviceCategory.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/device-category";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/admin/device-category/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
