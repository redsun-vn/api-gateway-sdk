import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../../libs/shared/src/types/istaff";
export declare function resetPassword(connection: IConnection, data: resetPassword.Input, userId: string): Promise<resetPassword.Output>;
export declare namespace resetPassword {
    type Input = Primitive<IStaff.IResetPassword>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/staffs/:userId/reset-password";
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
    const path: (userId: string) => string;
}
