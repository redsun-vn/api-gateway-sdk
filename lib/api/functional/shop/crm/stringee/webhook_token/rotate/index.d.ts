import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IStringeeConfig } from "../../../../../../../libs/shared/src/types/crm-service/istringee-config";
import type { IStringeeEnvelope } from "../../../../../../../modules/crm-service/stringee-config-resource/stringee-config-envelope";
export declare function rotateWebhookToken(connection: IConnection): Promise<rotateWebhookToken.Output>;
export declare namespace rotateWebhookToken {
    type Output = Primitive<IStringeeEnvelope<IStringeeConfig.IRotateTokenResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/stringee/webhook-token/rotate";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
