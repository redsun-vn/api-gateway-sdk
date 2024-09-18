import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IAuth } from "../../../../libs/shared/src/types/iauth";
export declare function sendOTPEmail(connection: IConnection, input: sendOTPEmail.Input): Promise<sendOTPEmail.Output>;
export declare namespace sendOTPEmail {
    type Input = Resolved<IAuth.IOTPEmail>;
    type Output = Primitive<IResponse<null | IAuth.IOTPResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/otp/email-generate";
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
