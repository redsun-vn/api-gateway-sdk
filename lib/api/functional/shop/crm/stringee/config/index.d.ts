import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IStringeeConfig } from "../../../../../../libs/shared/src/types/crm-service/istringee-config";
import type { IStringeeEnvelope } from "../../../../../../modules/crm-service/stringee-config-resource/stringee-config-envelope";
export * as verify from "./verify";
export declare function getConfig(connection: IConnection): Promise<getConfig.Output>;
export declare namespace getConfig {
    type Output = Primitive<IStringeeEnvelope<null | IStringeeConfig.IConfigResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/stringee/config";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function upsertConfig(connection: IConnection, body: upsertConfig.Input): Promise<upsertConfig.Output>;
export declare namespace upsertConfig {
    type Input = Resolved<IStringeeConfig.IUpsertRequest>;
    type Output = Primitive<IStringeeEnvelope<IStringeeConfig.IConfigResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/stringee/config";
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
