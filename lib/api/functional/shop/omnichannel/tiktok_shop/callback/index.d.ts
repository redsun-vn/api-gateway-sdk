import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ITiktokShop } from "../../../../../../libs/shared/src/types/omnichannel-service/itiktok-shop.type";
export declare function handleTiktokShopCallback(connection: IConnection, query: handleTiktokShopCallback.Query): Promise<handleTiktokShopCallback.Output>;
export declare namespace handleTiktokShopCallback {
    type Query = Resolved<ITiktokShop.ICallback>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/omnichannel/tiktok-shop/callback";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: handleTiktokShopCallback.Query) => string;
}
