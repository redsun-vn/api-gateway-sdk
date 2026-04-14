import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IOmnichannel } from "../../../../../../libs/shared/src/types/omnichannel-service/omnichannel.type";
export * as trigger from "./trigger";
export declare function syncOrders(connection: IConnection, opts: syncOrders.Input): Promise<syncOrders.Output>;
export declare namespace syncOrders {
    type Input = Resolved<IOmnichannel.SyncOrdersDto>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/omnichannel/sync/orders";
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
