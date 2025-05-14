import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IAuth } from "../../../../../libs/shared/src/types/iauth";
export declare function logOut(connection: IConnection, credentials: logOut.Input): Promise<logOut.Output>;
export declare namespace logOut {
    type Input = Resolved<IAuth.IRefreshToken>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/web-builder/auth/logout";
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
