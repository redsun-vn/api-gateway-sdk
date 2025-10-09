import type { IConnection, Resolved } from "@nestia/fetcher";
import type { IMobiInvoice } from "../../../../../libs/shared/src/types/order-service/imobi-invoice.type";
export declare function downloadInvoicePDF(connection: IConnection, orderId: string, params: downloadInvoicePDF.Query): Promise<void>;
export declare namespace downloadInvoicePDF {
    type Query = Resolved<IMobiInvoice.IInvoicePrintParams>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mobi-invoice/:orderId/download";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (orderId: string, params: downloadInvoicePDF.Query) => string;
}
