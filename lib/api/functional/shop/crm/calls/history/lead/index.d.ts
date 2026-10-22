import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICall } from "../../../../../../../libs/shared/src/types/crm-service/icall";
import type { IStringeeEnvelope } from "../../../../../../../modules/crm-service/stringee-config-resource/stringee-config-envelope";
export declare function createLeadFromCall(connection: IConnection, stringeeCallId: string, body: createLeadFromCall.Input): Promise<createLeadFromCall.Output>;
export declare namespace createLeadFromCall {
    type Input = Resolved<ICall.ICreateLeadFromCallRequest>;
    type Output = Primitive<IStringeeEnvelope<ICall.ICreateLeadFromCallResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/calls/history/:stringee_call_id/lead";
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
