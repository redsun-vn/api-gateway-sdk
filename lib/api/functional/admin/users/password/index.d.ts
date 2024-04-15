import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAdminUser } from "../../../../../libs/shared/src/types/admin-service/iuser";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function updatePassword(connection: IConnection, data: updatePassword.Input, id: string): Promise<updatePassword.Output>;
export declare namespace updatePassword {
    type Input = Primitive<IAdminUser.IUpdatePassword>;
    type Output = Primitive<IResponse<IAdminUser.IResponseWithoutSecret>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/users/:id/password";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
