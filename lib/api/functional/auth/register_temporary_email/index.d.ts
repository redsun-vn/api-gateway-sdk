import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IAuth } from "../../../../libs/shared/src/types/iauth";
export declare function registerTemporaryEmail(connection: IConnection, input: registerTemporaryEmail.Input): Promise<registerTemporaryEmail.Output>;
export declare namespace registerTemporaryEmail {
    type Input = Resolved<IAuth.IOTPEmail>;
    type Output = Primitive<IResponse<IAuth.IRegisterTemporaryResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/auth/register-temporary-email";
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
