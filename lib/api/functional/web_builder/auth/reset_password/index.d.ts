import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICustomerResetPassword } from "../../../../../libs/shared/src/types/client-secret.interface";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function resetPassword(connection: IConnection, credentials: resetPassword.Input): Promise<resetPassword.Output>;
export declare namespace resetPassword {
    type Input = Resolved<ICustomerResetPassword>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/web-builder/auth/reset-password";
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
