import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { ITomotekConfig } from "../../../../libs/shared/src/types/payment-service/itomotek-config.type";
export * as access_token from "./access_token";
export declare function createConfig(connection: IConnection, createConfigDto: createConfig.Input): Promise<createConfig.Output>;
export declare namespace createConfig {
    type Input = Resolved<ITomotekConfig.ICreate>;
    type Output = Primitive<IResponse<ITomotekConfig.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/tomotek-config";
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
export declare function updateConfig(connection: IConnection, shopId: string, updateConfigDto: updateConfig.Input): Promise<updateConfig.Output>;
export declare namespace updateConfig {
    type Input = Resolved<ITomotekConfig.IUpdate>;
    type Output = Primitive<IResponse<ITomotekConfig.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/tomotek-config/:shopId";
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
    const path: (shopId: string) => string;
}
export declare function getConfig(connection: IConnection, id: string): Promise<getConfig.Output>;
export declare namespace getConfig {
    type Output = Primitive<IResponse<ITomotekConfig.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/tomotek-config/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function getAll(connection: IConnection): Promise<getAll.Output>;
export declare namespace getAll {
    type Output = Primitive<IResponse<Array<ITomotekConfig.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/tomotek-config";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function create(connection: IConnection, id: string): Promise<create.Output>;
export declare namespace create {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/tomotek-config/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
