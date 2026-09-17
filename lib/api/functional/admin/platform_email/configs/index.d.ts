import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IPlatformEmail } from "../../../../../libs/shared/src/types/admin-service/iplatform-email";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function listConfigs(connection: IConnection): Promise<listConfigs.Output>;
export declare namespace listConfigs {
    type Output = Primitive<IResponse<Array<IPlatformEmail.IConfig>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/platform-email/configs";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function getConfig(connection: IConnection, brandCode: string): Promise<getConfig.Output>;
export declare namespace getConfig {
    type Output = Primitive<IResponse<null | IPlatformEmail.IConfig>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/platform-email/configs/:brandCode";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (brandCode: string) => string;
}
export declare function updateConfig(connection: IConnection, brandCode: string, body: updateConfig.Input): Promise<updateConfig.Output>;
export declare namespace updateConfig {
    type Input = Resolved<IPlatformEmail.IConfigUpdate>;
    type Output = Primitive<IResponse<IPlatformEmail.IConfig>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/platform-email/configs/:brandCode";
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
    const path: (brandCode: string) => string;
}
