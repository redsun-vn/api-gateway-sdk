import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IGhnDto } from "../../../../libs/shared/src/types/fulfillment-service/ighn";
import type { IShippingProvider } from "../../../../libs/shared/src/types/fulfillment-service/ishipping-provider";
export declare function orderFee(connection: IConnection, shippingCode: string, data: orderFee.Input): Promise<orderFee.Output>;
export declare namespace orderFee {
    type Input = Primitive<IGhnDto.IOrderFeeRequest>;
    type Output = Primitive<IResponse<IShippingProvider.IOrderFee>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shipping-providers/:shippingCode/order-fee";
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
    const path: (shippingCode: string) => string;
}
