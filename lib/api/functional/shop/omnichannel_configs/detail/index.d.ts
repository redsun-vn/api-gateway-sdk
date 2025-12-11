import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IOmnichannelShopConfig } from "../../../../../libs/shared/src/types/omnichannel-service/omnichannel-shop-config.type";
export declare function findOne(connection: IConnection): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IOmnichannelShopConfig.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/omnichannel-configs/detail";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
