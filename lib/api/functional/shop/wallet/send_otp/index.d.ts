import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IWallet } from "../../../../../libs/shared/src/types/loyalty-service/iwallet";
export declare function sendOTP(connection: IConnection, data: sendOTP.Input): Promise<sendOTP.Output>;
export declare namespace sendOTP {
    type Input = Resolved<IWallet.ISendOTP>;
    type Output = Primitive<false | true>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/wallet/send-otp";
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
