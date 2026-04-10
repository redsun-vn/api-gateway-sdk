import type { IConnection, Primitive } from "@nestia/fetcher";
export declare function getOrdersOnProvider(connection: IConnection, provider: string): Promise<getOrdersOnProvider.Output>;
export declare namespace getOrdersOnProvider {
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/omnichannel/:provider/orders";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (provider: string) => string;
}
