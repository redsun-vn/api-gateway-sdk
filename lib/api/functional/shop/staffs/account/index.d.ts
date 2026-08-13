import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IStaff } from "../../../../../libs/shared/src/types/istaff";
export * as reinstate from "./reinstate";
export declare function grantAccount(connection: IConnection, input: grantAccount.Input, id: string): Promise<grantAccount.Output>;
export declare namespace grantAccount {
    type Input = Resolved<IStaff.IGrantAccountInput>;
    type Output = Primitive<IResponse<IStaff.IHrProfileResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/staffs/:id/account";
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
