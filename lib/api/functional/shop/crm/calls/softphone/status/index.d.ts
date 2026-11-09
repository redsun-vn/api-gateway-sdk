import type { IConnection, Primitive } from "@nestia/fetcher";
import type { ICall } from "../../../../../../../libs/shared/src/types/crm-service/icall";
import type { IStringeeEnvelope } from "../../../../../../../modules/crm-service/stringee-config-resource/stringee-config-envelope";
export declare function softphoneStatus(connection: IConnection): Promise<softphoneStatus.Output>;
export declare namespace softphoneStatus {
    type Output = Primitive<IStringeeEnvelope<ICall.ISoftphoneStatusResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/calls/softphone/status";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
