import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICskhEmailConfig } from "../../../libs/shared/src/types/admin-service/icskh-email-config";
import type { IResponse } from "../../../libs/shared/src/types/common.type";
export * as novu_webhook from "./novu_webhook";
export declare function unsubscribe(connection: IConnection, data: unsubscribe.Input): Promise<unsubscribe.Output>;
export declare namespace unsubscribe {
    type Input = Resolved<ICskhEmailConfig.IUnsubscribeRequest>;
    type Output = Primitive<IResponse<ICskhEmailConfig.IUnsubscribeResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/cskh-email/unsubscribe";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
