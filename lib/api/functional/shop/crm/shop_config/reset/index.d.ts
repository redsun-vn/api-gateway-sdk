import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmShopConfig } from "../../../../../../libs/shared/src/types/crm-service/ishop-config";
export declare function resetCustomizations(connection: IConnection): Promise<resetCustomizations.Output>;
export declare namespace resetCustomizations {
    type Output = Primitive<IResponse<ICrmShopConfig.ICrmShopConfigResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/shop-config/reset";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
