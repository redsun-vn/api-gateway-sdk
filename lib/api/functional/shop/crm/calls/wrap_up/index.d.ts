import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICall } from "../../../../../../libs/shared/src/types/crm-service/icall";
import type { IStringeeEnvelope } from "../../../../../../modules/crm-service/stringee-config-resource/stringee-config-envelope";
export declare function upsertWrapup(connection: IConnection, stringeeCallId: string, body: upsertWrapup.Input): Promise<upsertWrapup.Output>;
export declare namespace upsertWrapup {
    type Input = Resolved<ICall.IWrapupRequest>;
    type Output = Primitive<IStringeeEnvelope<ICall.IWrapupResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/calls/:stringee_call_id/wrap-up";
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
