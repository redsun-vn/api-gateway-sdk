import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IEmailSenderIdentity } from "../../../../../libs/shared/src/types/notification/iemail-config.type";
export * as $default from "./$default";
export * as test_send from "./test_send";
export declare function listSenderIdentities(connection: IConnection): Promise<listSenderIdentities.Output>;
export declare namespace listSenderIdentities {
    type Output = Primitive<IResponse<Array<IEmailSenderIdentity.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/email/identities";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function createSenderIdentity(connection: IConnection, dto: createSenderIdentity.Input): Promise<createSenderIdentity.Output>;
export declare namespace createSenderIdentity {
    type Input = Resolved<IEmailSenderIdentity.ICreateRequest>;
    type Output = Primitive<IResponse<IEmailSenderIdentity.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/email/identities";
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
export declare function updateSenderIdentity(connection: IConnection, id: number, dto: updateSenderIdentity.Input): Promise<updateSenderIdentity.Output>;
export declare namespace updateSenderIdentity {
    type Input = Resolved<IEmailSenderIdentity.IUpdateRequest>;
    type Output = Primitive<IResponse<IEmailSenderIdentity.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/email/identities/:id";
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
    const path: (id: number) => string;
}
export declare function deleteSenderIdentity(connection: IConnection, id: number): Promise<deleteSenderIdentity.Output>;
export declare namespace deleteSenderIdentity {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/email/identities/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
