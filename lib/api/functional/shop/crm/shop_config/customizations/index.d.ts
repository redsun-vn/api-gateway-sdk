import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmShopConfig } from "../../../../../../libs/shared/src/types/crm-service/ishop-config";
export declare function updateCustomizations(connection: IConnection, body: updateCustomizations.Input): Promise<updateCustomizations.Output>;
export declare namespace updateCustomizations {
    type Input = Resolved<ICrmShopConfig.IUpdateCustomizations>;
    type Output = Primitive<IResponse<ICrmShopConfig.ICrmShopConfigResponse>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/crm/shop-config/customizations";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
