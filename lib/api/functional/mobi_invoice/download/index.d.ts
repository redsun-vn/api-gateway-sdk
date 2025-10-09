import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IMobiInvoice } from "../../../../libs/shared/src/types/order-service/imobi-invoice.type";
export declare function downloadInvoicePDF(connection: IConnection, orderId: string, params: downloadInvoicePDF.Query): Promise<downloadInvoicePDF.Output>;
export declare namespace downloadInvoicePDF {
    type Query = Resolved<IMobiInvoice.IInvoicePrintParams>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/mobi-invoice/:orderId/download";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (orderId: string, params: downloadInvoicePDF.Query) => string;
}
