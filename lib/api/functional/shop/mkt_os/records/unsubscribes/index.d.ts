import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IMktOsResults } from "../../../../../../libs/shared/src/types/crm-service/imkt-os-results";
export declare function recordUnsubscribe(connection: IConnection, type: string, id: string, body: recordUnsubscribe.Input): Promise<recordUnsubscribe.Output>;
export declare namespace recordUnsubscribe {
    type Input = Resolved<IMktOsResults.IRecordUnsubscribeRequest>;
    type Output = Primitive<IResponse<IMktOsResults.IRecordUnsubscribeResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/records/:type/:id/unsubscribes";
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
    const path: (type: string, id: string) => string;
}
