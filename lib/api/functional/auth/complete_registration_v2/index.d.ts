import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IAuth } from "../../../../libs/shared/src/types/iauth";
export declare function completeRegistrationV2(connection: IConnection, input: completeRegistrationV2.Input): Promise<completeRegistrationV2.Output>;
export declare namespace completeRegistrationV2 {
    type Input = Resolved<IAuth.IRegisterTemporaryRequest>;
    type Output = Primitive<IResponse<IAuth.ICompleteRegistrationV2Response>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/auth/complete-registration-v2";
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
