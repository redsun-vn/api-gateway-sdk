import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ITiktokShop } from "../../../../../libs/shared/src/types/omnichannel-service/itiktok-shop.type";
export declare function authorizeFromTiktokShop(connection: IConnection, opts: authorizeFromTiktokShop.Query): Promise<authorizeFromTiktokShop.Output>;
export declare namespace authorizeFromTiktokShop {
    type Query = Resolved<ITiktokShop.ICallback>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/omnichannel/tiktok-shop/callback";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (opts: authorizeFromTiktokShop.Query) => string;
}
