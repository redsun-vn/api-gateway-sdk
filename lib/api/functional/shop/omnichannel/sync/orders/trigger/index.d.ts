import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { TriggerSyncDto } from "../../../../../../../modules/omnichannel-service/dto/omnichannel-request.dto";
export declare function triggerOrderSync(connection: IConnection, opts: triggerOrderSync.Input): Promise<triggerOrderSync.Output>;
export declare namespace triggerOrderSync {
    type Input = Resolved<TriggerSyncDto>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/omnichannel/sync/orders/trigger";
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
