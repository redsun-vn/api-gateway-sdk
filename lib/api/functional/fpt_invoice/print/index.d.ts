import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IFptInvoice } from "../../../../libs/shared/src/types/order-service/ifpt-invoice.type";
export declare function printInvoice(connection: IConnection, orderId: string, params: printInvoice.Query): Promise<printInvoice.Output>;
export declare namespace printInvoice {
    type Query = Resolved<IFptInvoice.IInvoicePrintParams>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/fpt-invoice/:orderId/print";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (orderId: string, params: printInvoice.Query) => string;
}
