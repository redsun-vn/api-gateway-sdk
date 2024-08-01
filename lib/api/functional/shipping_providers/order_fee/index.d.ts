import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function orderFee(connection: IConnection, shippingCode: string, data: orderFee.Input): Promise<orderFee.Output>;
export declare namespace orderFee {
    type Input = Primitive<any>;
    type Output = Primitive<IResponse<any>>;
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
