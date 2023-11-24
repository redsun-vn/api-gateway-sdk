import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../libs/shared/src/types/istaff";
export * as reset_password from "./reset_password";
export declare function findAll(connection: IConnection): Promise<findAll.Output>;
export declare namespace findAll {
    type Output = Primitive<IResponse<IResponsePagination<IStaff.IStaffResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/staffs";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<string | IStaff.IStaffResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/staffs/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Primitive<IStaff.ICreate>;
    type Output = Primitive<IResponse<IStaff.IStaffResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/staffs";
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
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/staffs/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
export declare function update(connection: IConnection, data: update.Input, id: string): Promise<update.Output>;
export declare namespace update {
    type Input = Primitive<IStaff.IUpdate>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/staffs/:id";
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
