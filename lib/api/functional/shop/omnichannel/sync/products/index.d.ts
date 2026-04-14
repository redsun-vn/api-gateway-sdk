import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IOmnichannel } from "../../../../../../libs/shared/src/types/omnichannel-service/omnichannel.type";
export * as status from "./status";
export * as full from "./full";
export declare function syncSingleProduct(connection: IConnection, externalId: string, opts: syncSingleProduct.Input): Promise<syncSingleProduct.Output>;
export declare namespace syncSingleProduct {
    type Input = Resolved<IOmnichannel.SyncProductsDtoOpts>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/omnichannel/sync/products/:externalId";
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
    const path: (externalId: string) => string;
}
