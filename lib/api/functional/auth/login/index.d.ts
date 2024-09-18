import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IAuth } from "../../../../libs/shared/src/types/iauth";
export declare function getToken(connection: IConnection, input: getToken.Input): Promise<getToken.Output>;
export declare namespace getToken {
    type Input = Resolved<IAuth.ILogin>;
    type Output = Primitive<IResponse<IAuth.ILoginResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/auth/login";
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
