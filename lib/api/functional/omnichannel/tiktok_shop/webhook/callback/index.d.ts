import type { IConnection, Primitive } from "@nestia/fetcher";
export declare function webhookCallbackFromTiktokShop(connection: IConnection): Promise<webhookCallbackFromTiktokShop.Output>;
export declare namespace webhookCallbackFromTiktokShop {
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/omnichannel/tiktok-shop/webhook/callback";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
