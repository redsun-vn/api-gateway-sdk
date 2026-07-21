import type { IConnection, Primitive } from "@nestia/fetcher";
import type { ICskhEmailConfig } from "../../../../libs/shared/src/types/admin-service/icskh-email-config";
export declare function novuWebhook(connection: IConnection): Promise<novuWebhook.Output>;
export declare namespace novuWebhook {
    type Output = Primitive<ICskhEmailConfig.INovuWebhookAck>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/cskh-email/novu-webhook";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
