import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IAuth } from "../../../../libs/shared/src/types/iauth";
export declare function registerTemporary(connection: IConnection, input: registerTemporary.Input): Promise<registerTemporary.Output>;
export declare namespace registerTemporary {
    type Input = Resolved<IAuth.IOTPSMS>;
    type Output = Primitive<IResponse<IAuth.IRegisterTemporaryResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/auth/register-temporary";
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
