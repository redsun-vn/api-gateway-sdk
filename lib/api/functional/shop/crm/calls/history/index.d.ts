import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICall } from "../../../../../../libs/shared/src/types/crm-service/icall";
import type { IStringeeEnvelope } from "../../../../../../modules/crm-service/stringee-config-resource/stringee-config-envelope";
export * as link from "./link";
export * as lead from "./lead";
export declare function history(connection: IConnection, query: history.Query): Promise<history.Output>;
export declare namespace history {
    type Query = Resolved<ICall.IHistoryQuery>;
    type Output = Primitive<IStringeeEnvelope<ICall.IHistoryResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/calls/history";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: history.Query) => string;
}
export declare function historyDetail(connection: IConnection, stringeeCallId: string): Promise<historyDetail.Output>;
export declare namespace historyDetail {
    type Output = Primitive<IStringeeEnvelope<ICall.IHistoryItem>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/calls/history/:stringee_call_id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (stringeeCallId: string) => string;
}
