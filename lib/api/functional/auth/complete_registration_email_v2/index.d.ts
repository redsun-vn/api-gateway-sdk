import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IAuth } from "../../../../libs/shared/src/types/iauth";
export declare function completeRegistrationEmailV2(connection: IConnection, input: completeRegistrationEmailV2.Input): Promise<completeRegistrationEmailV2.Output>;
export declare namespace completeRegistrationEmailV2 {
    type Input = Resolved<IAuth.IRegisterTemporaryEmailRequest>;
    type Output = Primitive<IResponse<IAuth.ICompleteRegistrationEmailV2Response>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/auth/complete-registration-email-v2";
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
