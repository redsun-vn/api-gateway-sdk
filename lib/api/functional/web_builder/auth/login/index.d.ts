import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICustomerLogin } from "../../../../../libs/shared/src/types/client-secret.interface";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IAuth } from "../../../../../libs/shared/src/types/iauth";
export declare function getToken(connection: IConnection, credentials: getToken.Input): Promise<getToken.Output>;
export declare namespace getToken {
    type Input = Resolved<ICustomerLogin>;
    type Output = Primitive<IResponse<IAuth.ILoginResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/web-builder/auth/login";
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
