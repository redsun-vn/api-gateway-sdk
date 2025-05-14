import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IAuth } from "../../../../../libs/shared/src/types/iauth";
export declare function refreshToken(connection: IConnection, credentials: refreshToken.Input): Promise<refreshToken.Output>;
export declare namespace refreshToken {
    type Input = Resolved<IAuth.IRefreshToken>;
    type Output = Primitive<IResponse<IAuth.ILoginResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/web-builder/auth/refresh-token";
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
