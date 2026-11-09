import type { IConnection, Primitive } from "@nestia/fetcher";
import type { ICall } from "../../../../../../libs/shared/src/types/crm-service/icall";
import type { IStringeeEnvelope } from "../../../../../../modules/crm-service/stringee-config-resource/stringee-config-envelope";
export declare function clientToken(connection: IConnection): Promise<clientToken.Output>;
export declare namespace clientToken {
    type Output = Primitive<IStringeeEnvelope<ICall.IClientTokenResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/calls/client-token";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
