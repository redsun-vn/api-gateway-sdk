import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IOmnichannelShopConfig } from "../../../../../libs/shared/src/types/omnichannel-service/omnichannel-shop-config.type";
export declare function toggleActive(connection: IConnection, id: number, data: toggleActive.Input): Promise<toggleActive.Output>;
export declare namespace toggleActive {
    type Input = Resolved<IOmnichannelShopConfig.IToggleActiveRequest>;
    type Output = Primitive<IResponse<IOmnichannelShopConfig.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/omnichannel-configs/:id/toggle-active";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: number) => string;
}
