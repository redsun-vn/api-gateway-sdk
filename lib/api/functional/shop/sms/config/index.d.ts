import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISmsConfig } from "../../../../../libs/shared/src/types/notification/isms-config.type";
export * as activate from "./activate";
export * as test from "./test";
export declare function listConfigs(connection: IConnection): Promise<listConfigs.Output>;
export declare namespace listConfigs {
    type Output = Primitive<IResponse<Array<ISmsConfig.IConfigResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/sms/config";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function getConfig(connection: IConnection, id: number): Promise<getConfig.Output>;
export declare namespace getConfig {
    type Output = Primitive<IResponse<ISmsConfig.IConfigResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/sms/config/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function createConfig(connection: IConnection, dto: createConfig.Input): Promise<createConfig.Output>;
export declare namespace createConfig {
    type Input = Resolved<ISmsConfig.IShopCreateRequest>;
    type Output = Primitive<IResponse<ISmsConfig.IConfigResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/sms/config";
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
export declare function updateConfig(connection: IConnection, id: number, dto: updateConfig.Input): Promise<updateConfig.Output>;
export declare namespace updateConfig {
    type Input = Resolved<ISmsConfig.IUpdateRequest>;
    type Output = Primitive<IResponse<ISmsConfig.IConfigResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/sms/config/:id";
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
    const path: (id: number) => string;
}
export declare function deleteConfig(connection: IConnection, id: number): Promise<deleteConfig.Output>;
export declare namespace deleteConfig {
    type Output = Primitive<IResponse<ISmsConfig.IDeleteResponse>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/sms/config/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
