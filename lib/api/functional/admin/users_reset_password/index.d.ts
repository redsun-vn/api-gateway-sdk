import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAdminUser } from "../../../../libs/shared/src/types/admin-service/iuser";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function resetPassword(connection: IConnection, data: resetPassword.Input): Promise<resetPassword.Output>;
export declare namespace resetPassword {
    type Input = Resolved<IAdminUser.IResetPassword>;
    type Output = Primitive<IResponse<IAdminUser.IResponseWithoutSecret>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/users-reset-password";
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
