import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function publishInvoiceForOrder(connection: IConnection, orderId: string, data: publishInvoiceForOrder.Input): Promise<publishInvoiceForOrder.Output>;
export declare namespace publishInvoiceForOrder {
    type Input = Primitive<any>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/e-invoice/publish/:orderId";
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
    const path: (orderId: string) => string;
}
