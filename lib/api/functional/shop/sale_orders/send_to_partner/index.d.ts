import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISaleOrder } from "../../../../../libs/shared/src/types/order-service/isale-order";
export declare function sendToPartner(connection: IConnection, id: string): Promise<sendToPartner.Output>;
export declare namespace sendToPartner {
    type Output = Primitive<IResponse<ISaleOrder.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/sale-orders/:id/send-to-partner";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
