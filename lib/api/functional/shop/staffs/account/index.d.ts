import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../../libs/shared/src/types/istaff";
export declare function grantAccount(connection: IConnection, id: string): Promise<grantAccount.Output>;
export declare namespace grantAccount {
    type Output = Primitive<IResponse<IStaff.IHrProfileResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/staffs/:id/account";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
export declare function revokeAccount(connection: IConnection, id: string): Promise<revokeAccount.Output>;
export declare namespace revokeAccount {
    type Output = Primitive<IResponse<IStaff.IHrProfileResponse>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/staffs/:id/account";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
