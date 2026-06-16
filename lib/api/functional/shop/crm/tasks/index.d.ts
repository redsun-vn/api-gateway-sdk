import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ICrmTask } from "../../../../../libs/shared/src/types/crm-service/itask";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<ICrmTask.ITaskListQuery>;
    type Output = Primitive<IResponse<Array<ICrmTask.ICrmTaskResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/tasks";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ICrmTask.ICreate>;
    type Output = Primitive<IResponse<ICrmTask.ICrmTaskResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/tasks";
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
    type Input = Resolved<Partial<ICrmTask.ICreate>>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/tasks/:id";
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
export declare function complete(connection: IConnection, id: string, data: complete.Input): Promise<complete.Output>;
export declare namespace complete {
    type Input = Resolved<ICrmTask.IComplete>;
    type Output = Primitive<IResponse<ICrmTask.ICrmTaskResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/tasks/:id/complete";
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
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/crm/tasks/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
