import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IOmnichannel } from "../../../../../../../libs/shared/src/types/omnichannel-service/omnichannel.type";
export declare function fullSyncProducts(connection: IConnection, opts: fullSyncProducts.Input): Promise<fullSyncProducts.Output>;
export declare namespace fullSyncProducts {
    type Input = Resolved<IOmnichannel.SyncProductsDtoOpts>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/omnichannel/sync/products/full";
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
