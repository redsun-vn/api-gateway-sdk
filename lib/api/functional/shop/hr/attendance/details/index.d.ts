import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../../libs/shared/src/types/common.type";
import type { IAttendanceDetail } from "../../../../../../libs/shared/src/types/hr/attendance/detail";
export * as time from "./time";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IAttendanceDetail.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/attendance/details";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function $export(connection: IConnection, query: $export.Query): Promise<$export.Output>;
export declare namespace $export {
    type Query = Resolved<IQuery>;
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/attendance/details/export";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: $export.Query) => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IAttendanceDetail.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/attendance/details/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IAttendanceDetail.IRequestCreate>;
    type Output = Primitive<IResponse<IAttendanceDetail.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/attendance/details";
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
export declare function update(connection: IConnection, data: update.Input, id: string): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IAttendanceDetail.IUpdate>;
    type Output = Primitive<IResponse<IAttendanceDetail.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/hr/attendance/details/:id";
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
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/hr/attendance/details/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function $import(connection: IConnection, data: $import.Input): Promise<$import.Output>;
export declare namespace $import {
    type Input = Resolved<IAttendanceDetail.IImportRequest>;
    type Output = Primitive<IResponse<IAttendanceDetail.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/attendance/details/import";
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
