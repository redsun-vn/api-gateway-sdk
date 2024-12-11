import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAdminAuth } from "../../../../libs/shared/src/types/admin-service/iauth";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
export * as login from "./login";
export * as refresh_token from "./refresh_token";
export * as me from "./me";
export declare function logout(connection: IConnection, input: logout.Input): Promise<logout.Output>;
export declare namespace logout {
    type Input = Resolved<IAdminAuth.IRefreshToken>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/auth/logout";
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
