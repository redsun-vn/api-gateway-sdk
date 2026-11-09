import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOsSubscriber } from "../../../../../../libs/shared/src/types/crm-service/imkt-os-subscriber";
export declare function $delete(connection: IConnection, body: $delete.Input): Promise<$delete.Output>;
export declare namespace $delete {
    type Input = Resolved<IMktOsSubscriber.IBulkDeleteRequest>;
    type Output = Primitive<IResponse<IMktOsSubscriber.IBulkJob>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/subscriber-bulk-jobs/deletes";
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
