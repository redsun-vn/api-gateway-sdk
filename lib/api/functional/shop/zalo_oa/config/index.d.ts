import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IZaloOA } from "../../../../../libs/shared/src/types/notification/izalo-oa.type";
export * as toggle from "./toggle";
export * as verify from "./verify";
export declare function createConfig(connection: IConnection, input: createConfig.Input): Promise<createConfig.Output>;
export declare namespace createConfig {
    type Input = Resolved<Omit<IZaloOA.ICreateShopZaloOAConfig, "shop_id">>;
    type Output = Primitive<IResponse<IZaloOA.IShopZaloOAConfig>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/zalo-oa/config";
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
export declare function updateConfig(connection: IConnection, input: updateConfig.Input): Promise<updateConfig.Output>;
export declare namespace updateConfig {
    type Input = Resolved<Omit<IZaloOA.IUpdateShopZaloOAConfig, "shop_id">>;
    type Output = Primitive<IResponse<IZaloOA.IShopZaloOAConfig>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/zalo-oa/config";
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
    const path: () => string;
}
export declare function getConfigByShop(connection: IConnection): Promise<getConfigByShop.Output>;
export declare namespace getConfigByShop {
    type Output = Primitive<IResponse<IZaloOA.IShopZaloOAConfig>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/zalo-oa/config";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function getConfig(connection: IConnection, id: string): Promise<getConfig.Output>;
export declare namespace getConfig {
    type Output = Primitive<IResponse<IZaloOA.IShopZaloOAConfig>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/zalo-oa/config/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function deleteConfig(connection: IConnection): Promise<deleteConfig.Output>;
export declare namespace deleteConfig {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/zalo-oa/config";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
