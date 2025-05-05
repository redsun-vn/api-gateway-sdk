import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../../libs/shared/src/types/common.type";
import type { ILeave } from "../../../../../../libs/shared/src/types/hr/salary/leave";
export * as my_request from "./my_request";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ILeave.ILeaveRequestResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/leave-requests";
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
    type Output = Primitive<IResponse<ILeave.ILeaveRequestResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/leave-requests/:id";
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
    type Input = Resolved<ILeave.ICreateLeaveRequest>;
    type Output = Primitive<IResponse<ILeave.ILeaveRequestResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/salary/leave-requests";
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
export declare function approve(connection: IConnection, data: approve.Input, id: string): Promise<approve.Output>;
export declare namespace approve {
    type Input = Resolved<ILeave.IApproveLeaveRequest>;
    type Output = Primitive<IResponse<ILeave.ILeaveRequestResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/hr/salary/leave-requests/:id/approve";
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
export declare function reject(connection: IConnection, data: reject.Input, id: string): Promise<reject.Output>;
export declare namespace reject {
    type Input = Resolved<ILeave.IRejectLeaveRequest>;
    type Output = Primitive<IResponse<ILeave.ILeaveRequestResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/hr/salary/leave-requests/:id/reject";
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
        readonly path: "/shop/hr/salary/leave-requests/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
