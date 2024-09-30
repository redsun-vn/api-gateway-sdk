import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IGlobalConfig } from "../../../../libs/shared/src/types/admin-service/iconfig";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function findAllConfig(connection: IConnection): Promise<findAllConfig.Output>;
export declare namespace findAllConfig {
    type Output = Primitive<IResponse<Array<IGlobalConfig.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/global-configs";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function createOrUpdate(connection: IConnection, input: createOrUpdate.Input): Promise<createOrUpdate.Output>;
export declare namespace createOrUpdate {
    type Input = Resolved<IGlobalConfig.IDataCreate>;
    type Output = Primitive<IResponse<Array<IGlobalConfig.IResponse>>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/global-configs";
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
export declare function $delete(connection: IConnection, key: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/admin/global-configs/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (key: string) => string;
}
