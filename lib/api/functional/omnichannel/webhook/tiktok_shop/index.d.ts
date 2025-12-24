import type { IConnection, Primitive } from "@nestia/fetcher";
export declare function webhookFromTiktokShop(connection: IConnection): Promise<webhookFromTiktokShop.Output>;
export declare namespace webhookFromTiktokShop {
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/omnichannel/webhook/tiktok-shop";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
