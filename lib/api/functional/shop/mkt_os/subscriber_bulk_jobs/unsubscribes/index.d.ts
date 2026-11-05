import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOsSubscriber } from "../../../../../../libs/shared/src/types/crm-service/imkt-os-subscriber";
export declare function unsubscribe(connection: IConnection, body: unsubscribe.Input): Promise<unsubscribe.Output>;
export declare namespace unsubscribe {
    type Input = Resolved<IMktOsSubscriber.IBulkUnsubscribeRequest>;
    type Output = Primitive<IResponse<IMktOsSubscriber.IBulkJob>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/subscriber-bulk-jobs/unsubscribes";
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
