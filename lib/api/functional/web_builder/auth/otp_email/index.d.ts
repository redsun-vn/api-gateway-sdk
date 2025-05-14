import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICustomerOTP } from "../../../../../libs/shared/src/types/client-secret.interface";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function otpEmail(connection: IConnection, credentials: otpEmail.Input): Promise<otpEmail.Output>;
export declare namespace otpEmail {
    type Input = Resolved<ICustomerOTP>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/web-builder/auth/otp-email";
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
