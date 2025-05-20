import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICustomerRegister } from "../../../../libs/shared/src/types/client-secret.interface";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IPartner } from "../../../../libs/shared/src/types/partner-service/ipartner";
export * as login from "./login";
export * as refresh_token from "./refresh_token";
export * as logout from "./logout";
export * as otp_email from "./otp_email";
export * as reset_password from "./reset_password";
export * as me from "./me";
export declare function register(connection: IConnection, credentials: register.Input): Promise<register.Output>;
export declare namespace register {
    type Input = Resolved<ICustomerRegister>;
    type Output = Primitive<IResponse<IPartner.IPartnerResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/web-builder/auth/register";
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
