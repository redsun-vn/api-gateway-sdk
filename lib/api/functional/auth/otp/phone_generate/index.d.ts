import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IAuth } from "../../../../../libs/shared/src/types/iauth";
export declare function sendOTPSMS(connection: IConnection, input: sendOTPSMS.Input): Promise<sendOTPSMS.Output>;
export declare namespace sendOTPSMS {
    type Input = Primitive<IAuth.IOTPSMS>;
    type Output = Primitive<IResponse<null | IAuth.IOTPResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/auth/otp/phone-generate";
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
