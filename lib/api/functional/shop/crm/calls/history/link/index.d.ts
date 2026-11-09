import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICall } from "../../../../../../../libs/shared/src/types/crm-service/icall";
import type { IStringeeEnvelope } from "../../../../../../../modules/crm-service/stringee-config-resource/stringee-config-envelope";
export declare function linkRecord(connection: IConnection, stringeeCallId: string, body: linkRecord.Input): Promise<linkRecord.Output>;
export declare namespace linkRecord {
    type Input = Resolved<ICall.ILinkRecordRequest>;
    type Output = Primitive<IStringeeEnvelope<ICall.IHistoryItem>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/calls/history/:stringee_call_id/link";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (stringeeCallId: string) => string;
}
