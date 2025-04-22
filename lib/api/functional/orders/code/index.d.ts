import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IOrder } from "../../../../libs/shared/src/types/order-service/iorder.type";
export declare function findOrderByCode(connection: IConnection, code: string): Promise<findOrderByCode.Output>;
export declare namespace findOrderByCode {
    type Output = Primitive<IResponse<IOrder.IDetailOrderResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/orders/:code/code";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (code: string) => string;
}
