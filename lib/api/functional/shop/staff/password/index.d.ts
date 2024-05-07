import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../../libs/shared/src/types/istaff";
export declare function updatePwd(connection: IConnection, data: updatePwd.Input): Promise<updatePwd.Output>;
export declare namespace updatePwd {
    type Input = Primitive<IStaff.IUpdatePassword>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/staff/password";
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
    const path: () => string;
}
