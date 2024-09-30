import type { IConnection, Primitive } from "@nestia/fetcher";
import type { INotify } from "../../../../libs/shared/src/types/admin-service/inotify";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function findAll(connection: IConnection): Promise<findAll.Output>;
export declare namespace findAll {
    type Output = Primitive<IResponse<Array<INotify.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/notify";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Primitive<INotify.ICreate>;
    type Output = Primitive<IResponse<INotify.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/notify";
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
export declare function update(connection: IConnection, id: string, data: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Primitive<INotify.IUpdate>;
    type Output = Primitive<IResponse<INotify.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/notify/:id";
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
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<INotify.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/notify/:id";
        readonly request: null;
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
        readonly path: "/admin/notify/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
