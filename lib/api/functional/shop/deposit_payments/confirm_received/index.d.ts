import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IPayment } from "../../../../../libs/shared/src/types/payment-service/ipayment.type";
export declare function confirmReceived(connection: IConnection, paymentId: string, body: confirmReceived.Input): Promise<confirmReceived.Output>;
export declare namespace confirmReceived {
    type Input = Resolved<IPayment.IDepositPaymentConrfirmReceived>;
    type Output = Primitive<IResponse<IPayment.IDepositPaymentConrfirmReceivedResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/deposit-payments/:payment_id/confirm-received";
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
    const path: (paymentId: string) => string;
}
