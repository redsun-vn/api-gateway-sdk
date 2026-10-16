import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IStringeeConfig } from "../../../../../../../libs/shared/src/types/crm-service/istringee-config";
import type { IStringeeEnvelope } from "../../../../../../../modules/crm-service/stringee-config-resource/stringee-config-envelope";
export declare function verifyConfig(connection: IConnection, body: verifyConfig.Input): Promise<verifyConfig.Output>;
export declare namespace verifyConfig {
    type Input = Resolved<IStringeeConfig.IVerifyRequest>;
    type Output = Primitive<IStringeeEnvelope<IStringeeConfig.IVerifyResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/stringee/config/verify";
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
    const path: () => string;
}
