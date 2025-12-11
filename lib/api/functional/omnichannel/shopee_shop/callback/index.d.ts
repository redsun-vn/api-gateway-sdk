import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IShopeeShop } from "../../../../../libs/shared/src/types/omnichannel-service/ishopee-shop.type";
export declare function authorizeFromShopeeShop(connection: IConnection, opts: authorizeFromShopeeShop.Query): Promise<authorizeFromShopeeShop.Output>;
export declare namespace authorizeFromShopeeShop {
    type Query = Resolved<IShopeeShop.ICallback>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/omnichannel/shopee-shop/callback";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (opts: authorizeFromShopeeShop.Query) => string;
}
