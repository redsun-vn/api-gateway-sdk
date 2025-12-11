import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IOmnichannel } from "../../../../../libs/shared/src/types/omnichannel-service/omnichannel.type";
export declare function getProviderShopInfo(connection: IConnection, opts: getProviderShopInfo.Query): Promise<getProviderShopInfo.Output>;
export declare namespace getProviderShopInfo {
    type Query = Resolved<IOmnichannel.IGetShopInfo>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/omnichannel/shop/info";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (opts: getProviderShopInfo.Query) => string;
}
