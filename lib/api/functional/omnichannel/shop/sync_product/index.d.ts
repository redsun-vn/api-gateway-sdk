import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function syncCreateProduct(connection: IConnection, provider: string, data: syncCreateProduct.Input): Promise<syncCreateProduct.Output>;
export declare namespace syncCreateProduct {
    type Input = Primitive<any>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/omnichannel/shop/sync-product/:provider";
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
    const path: (provider: string) => string;
}
export declare function syncUpdateProduct(connection: IConnection, provider: string, data: syncUpdateProduct.Input): Promise<syncUpdateProduct.Output>;
export declare namespace syncUpdateProduct {
    type Input = Primitive<any>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/omnichannel/shop/sync-product/:provider";
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
    const path: (provider: string) => string;
}
