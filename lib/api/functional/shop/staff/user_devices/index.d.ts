import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IUserDevice } from "../../../../../libs/shared/src/types/iuser-device";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IUserDevice.IUserDeviceResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/staff/user-devices";
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
    type Output = Primitive<IResponse<IUserDevice.IUserDeviceResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/staff/user-devices/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
export declare function create(connection: IConnection, data: create.Input, staffId: string): Promise<create.Output>;
export declare namespace create {
    type Input = Primitive<IUserDevice.ICreate>;
    type Output = Primitive<IResponse<IUserDevice.IUserDeviceResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/staff/:staffId/user-devices";
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
    const path: (staffId: string) => string;
}
export declare function update(connection: IConnection, data: update.Input, id: string): Promise<update.Output>;
export declare namespace update {
    type Input = Primitive<IUserDevice.IUpdate>;
    type Output = Primitive<IResponse<IUserDevice.IUserDeviceResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/staff/user-devices/:id";
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
        readonly path: "/shop/staff/user-devices/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
