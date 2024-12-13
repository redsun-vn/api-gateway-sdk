import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IApplication } from "../../../../libs/shared/src/types/shop-service/application/application";
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IApplication.ICreate>;
    type Output = Primitive<IResponse<IApplication.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/application";
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
    type Input = Resolved<IApplication.IUpdate>;
    type Output = Primitive<IResponse<IApplication.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/application/:id";
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
        readonly path: "/admin/application/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
