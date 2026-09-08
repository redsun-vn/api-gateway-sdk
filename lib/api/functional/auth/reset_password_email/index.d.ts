import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IAuth } from "../../../../libs/shared/src/types/iauth";
export declare function resetPasswordEmail(connection: IConnection, input: resetPasswordEmail.Input): Promise<resetPasswordEmail.Output>;
export declare namespace resetPasswordEmail {
    type Input = Resolved<IAuth.IResetPasswordEmailRequest>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/auth/reset-password-email";
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
