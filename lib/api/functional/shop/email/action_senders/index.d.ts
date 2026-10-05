import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IEmailSenderIdentity } from "../../../../../libs/shared/src/types/notification/iemail-config.type";
export declare function listActionSenders(connection: IConnection): Promise<listActionSenders.Output>;
export declare namespace listActionSenders {
    type Output = Primitive<IResponse<Array<IEmailSenderIdentity.IActionSenderResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/email/action-senders";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function setActionSender(connection: IConnection, modelKey: string, actionKey: string, dto: setActionSender.Input): Promise<setActionSender.Output>;
export declare namespace setActionSender {
    type Input = Resolved<IEmailSenderIdentity.IActionSenderSetRequest>;
    type Output = Primitive<IResponse<null | IEmailSenderIdentity.IActionSenderResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/email/action-senders/:model_key/:action_key";
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
    const path: (modelKey: string, actionKey: string) => string;
}
