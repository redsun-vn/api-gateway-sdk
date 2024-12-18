import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAdminAuth } from "../../../../../libs/shared/src/types/admin-service/iauth";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function refreshToken(connection: IConnection, input: refreshToken.Input): Promise<refreshToken.Output>;
export declare namespace refreshToken {
    type Input = Resolved<IAdminAuth.IRefreshToken>;
    type Output = Primitive<IResponse<IAdminAuth.ILoginResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/auth/refresh-token";
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
