import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ICrmShopConfig } from "../../../../../libs/shared/src/types/crm-service/ishop-config";
export * as customizations from "./customizations";
export * as reset from "./reset";
export declare function findEffectiveConfig(connection: IConnection): Promise<findEffectiveConfig.Output>;
export declare namespace findEffectiveConfig {
    type Output = Primitive<IResponse<ICrmShopConfig.ICrmShopConfigResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/shop-config";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
