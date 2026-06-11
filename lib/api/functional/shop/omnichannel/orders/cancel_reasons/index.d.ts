import type { IConnection, Primitive } from "@nestia/fetcher";
export declare function getOrderCancelReasons(connection: IConnection, provider: string): Promise<getOrderCancelReasons.Output>;
export declare namespace getOrderCancelReasons {
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/omnichannel/:provider/orders/cancel-reasons";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (provider: string) => string;
}
