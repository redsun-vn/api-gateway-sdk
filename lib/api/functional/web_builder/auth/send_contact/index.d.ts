import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICustomerSendContact } from "../../../../../libs/shared/src/types/client-secret.interface";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function sendContact(connection: IConnection, contact: sendContact.Input): Promise<sendContact.Output>;
export declare namespace sendContact {
    type Input = Resolved<ICustomerSendContact>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/web-builder/auth/send-contact";
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
