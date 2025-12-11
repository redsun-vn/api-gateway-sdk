import type { IConnection, Primitive } from "@nestia/fetcher";
export declare function getProductsOnProvider(connection: IConnection, provider: string): Promise<getProductsOnProvider.Output>;
export declare namespace getProductsOnProvider {
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/omnichannel/shop/:provider/products";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (provider: string) => string;
}
export declare function getProductDetailOnProvider(connection: IConnection, provider: string, productId: string): Promise<getProductDetailOnProvider.Output>;
export declare namespace getProductDetailOnProvider {
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/omnichannel/shop/:provider/products/:productId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (provider: string, productId: string) => string;
}
