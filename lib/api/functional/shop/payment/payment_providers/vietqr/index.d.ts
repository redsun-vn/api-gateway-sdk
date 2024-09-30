import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IPaymentProvider } from "../../../../../../libs/shared/src/types/payment-service/ipayment-provider.type";
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IPaymentProvider.IVietQRCreate>;
    type Output = Primitive<IResponse<IPaymentProvider.IVietQRResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/payment/payment-providers/vietqr";
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
