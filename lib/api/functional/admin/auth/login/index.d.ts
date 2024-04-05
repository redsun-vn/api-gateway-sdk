import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAdminAuth } from "../../../../../libs/shared/src/types/admin-service/iauth";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function getToken(connection: IConnection, input: getToken.Input): Promise<getToken.Output>;
export declare namespace getToken {
    type Input = Primitive<IAdminAuth.ILogin>;
    type Output = Primitive<IResponse<IAdminAuth.ILoginResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/auth/login";
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
