import type { IConnection, Primitive } from "@nestia/fetcher";
import type { ICall } from "../../../../../../../libs/shared/src/types/crm-service/icall";
import type { IStringeeEnvelope } from "../../../../../../../modules/crm-service/stringee-config-resource/stringee-config-envelope";
export * as swap_roles from "./swap_roles";
export * as retry from "./retry";
export * as resummarize from "./resummarize";
export declare function transcript(connection: IConnection, stringeeCallId: string): Promise<transcript.Output>;
export declare namespace transcript {
    type Output = Primitive<IStringeeEnvelope<ICall.ITranscriptResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/calls/history/:stringee_call_id/transcript";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (stringeeCallId: string) => string;
}
