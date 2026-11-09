import type { IConnection, Primitive } from "@nestia/fetcher";
import type { ICall } from "../../../../../../../../libs/shared/src/types/crm-service/icall";
import type { IStringeeEnvelope } from "../../../../../../../../modules/crm-service/stringee-config-resource/stringee-config-envelope";
export declare function swapTranscriptRoles(connection: IConnection, stringeeCallId: string): Promise<swapTranscriptRoles.Output>;
export declare namespace swapTranscriptRoles {
    type Output = Primitive<IStringeeEnvelope<ICall.ITranscriptResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/calls/history/:stringee_call_id/transcript/swap-roles";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (stringeeCallId: string) => string;
}
