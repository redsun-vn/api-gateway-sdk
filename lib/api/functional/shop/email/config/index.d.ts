import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IEmailConfig } from "../../../../../libs/shared/src/types/notification/iemail-config.type";
export * as activate from "./activate";
export * as test_send from "./test_send";
export declare function listConfigs(connection: IConnection): Promise<listConfigs.Output>;
export declare namespace listConfigs {
    type Output = Primitive<IResponse<Array<IEmailConfig.IConfigResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/email/config";
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
    type Output = Primitive<IResponse<IEmailConfig.IConfigResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/email/config/:id";
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
    type Input = Resolved<IEmailConfig.IShopCreateRequest>;
    type Output = Primitive<IResponse<IEmailConfig.IConfigResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/email/config";
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
    type Input = Resolved<IEmailConfig.IUpdateRequest>;
    type Output = Primitive<IResponse<IEmailConfig.IConfigResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/email/config/:id";
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
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/email/config/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
