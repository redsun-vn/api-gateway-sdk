import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IOmnichannelShopConfig } from "../../../../../libs/shared/src/types/omnichannel-service/omnichannel-shop-config.type";
export declare function bulkUpdate(connection: IConnection, data: bulkUpdate.Input): Promise<bulkUpdate.Output>;
export declare namespace bulkUpdate {
    type Input = Resolved<Omit<IOmnichannelShopConfig.IBulkUpdateRequest, "shopId">>;
    type Output = Primitive<IResponse<IOmnichannelShopConfig.IBulkUpdateResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/omnichannel-configs/bulk-update";
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
    const path: () => string;
}
