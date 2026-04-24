import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IClinicQueue } from "../../../../../libs/shared/src/types/partner-service/iclinic-queue";
export declare function create(connection: IConnection, body: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IClinicQueue.ICreate>;
    type Output = Primitive<IResponse<IClinicQueue.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/clinic/queue";
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
export declare function findMany(connection: IConnection, query: findMany.Query): Promise<findMany.Output>;
export declare namespace findMany {
    type Query = Resolved<IClinicQueue.IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IClinicQueue.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/clinic/queue";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findMany.Query) => string;
}
export declare function call(connection: IConnection, id: string): Promise<call.Output>;
export declare namespace call {
    type Output = Primitive<IResponse<IClinicQueue.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/clinic/queue/:id/call";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
export declare function start(connection: IConnection, id: string, body: start.Input): Promise<start.Output>;
export declare namespace start {
    type Input = Resolved<IClinicQueue.IStart>;
    type Output = Primitive<IResponse<IClinicQueue.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/clinic/queue/:id/start";
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
    const path: (id: string) => string;
}
export declare function done(connection: IConnection, id: string): Promise<done.Output>;
export declare namespace done {
    type Output = Primitive<IResponse<IClinicQueue.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/clinic/queue/:id/done";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
export declare function leave(connection: IConnection, id: string, body: leave.Input): Promise<leave.Output>;
export declare namespace leave {
    type Input = Resolved<IClinicQueue.ILeave>;
    type Output = Primitive<IResponse<IClinicQueue.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/clinic/queue/:id/leave";
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
    const path: (id: string) => string;
}
