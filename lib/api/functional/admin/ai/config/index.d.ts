import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiSystemConfig } from "../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export * as pricing from "./pricing";
export declare function listConfigs(connection: IConnection, query: listConfigs.Query): Promise<listConfigs.Output>;
export declare namespace listConfigs {
    type Query = Resolved<IAiSystemConfig.IListRequest>;
    type Output = Primitive<IResponse<Array<IAiSystemConfig.IConfigEntity>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/ai/config";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listConfigs.Query) => string;
}
export declare function getConfig(connection: IConnection, key: string): Promise<getConfig.Output>;
export declare namespace getConfig {
    type Output = Primitive<IResponse<null | IAiSystemConfig.IConfigEntity>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/ai/config/:key";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (key: string) => string;
}
export declare function setConfig(connection: IConnection, body: setConfig.Input): Promise<setConfig.Output>;
export declare namespace setConfig {
    type Input = Resolved<IAiSystemConfig.ISetRequest>;
    type Output = Primitive<IResponse<IAiSystemConfig.ISuccessResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/ai/config";
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
export declare function deleteConfig(connection: IConnection, key: string): Promise<deleteConfig.Output>;
export declare namespace deleteConfig {
    type Output = Primitive<IResponse<IAiSystemConfig.ISuccessResponse>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/admin/ai/config/:key";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (key: string) => string;
}
