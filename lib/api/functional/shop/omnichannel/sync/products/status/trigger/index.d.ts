import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../../libs/shared/src/types/common.type";
import type { IOmnichannel } from "../../../../../../../../libs/shared/src/types/omnichannel-service/omnichannel.type";
export declare function triggerProductStatusSync(connection: IConnection, opts: triggerProductStatusSync.Input): Promise<triggerProductStatusSync.Output>;
export declare namespace triggerProductStatusSync {
    type Input = Resolved<IOmnichannel.TriggerSyncDto>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/omnichannel/sync/products/status/trigger";
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
