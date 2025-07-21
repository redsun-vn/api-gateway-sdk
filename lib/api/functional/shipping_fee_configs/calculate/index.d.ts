import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IShippingFeeConfig } from "../../../../libs/shared/src/types/order-service/ishipping-fee-config.type";
export declare function calculateFee(connection: IConnection, request: calculateFee.Input): Promise<calculateFee.Output>;
export declare namespace calculateFee {
    type Input = Resolved<IShippingFeeConfig.IFeeCalculationRequest>;
    type Output = Primitive<IResponse<IShippingFeeConfig.IFeeCalculationResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shipping-fee-configs/calculate";
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
