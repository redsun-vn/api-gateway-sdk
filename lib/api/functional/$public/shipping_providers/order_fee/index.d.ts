import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IShippingProvider } from "../../../../../libs/shared/src/types/fulfillment-service/ishipping-provider";
export declare function orderFee(connection: IConnection, shippingCode: IShippingProvider.ShippingProviderCode, data: orderFee.Input): Promise<orderFee.Output>;
export declare namespace orderFee {
    type Input = Resolved<IShippingProvider.GhtkOrderFeeDto | IShippingProvider.GhnOrderFeeDto>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/public/shipping-providers/:shippingCode/order-fee";
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
    const path: (shippingCode: IShippingProvider.ShippingProviderCode) => string;
}
