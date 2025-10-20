import type { IConnection, Resolved } from "@nestia/fetcher";
import type { IMisaInvoice } from "../../../../libs/shared/src/types/order-service/imisa-invoice.type";
export declare function downloadInvoice(connection: IConnection, orderId: string, params: downloadInvoice.Query): Promise<void>;
export declare namespace downloadInvoice {
    type Query = Resolved<IMisaInvoice.IInvoicePrintParams>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/e-invoice/:orderId/download";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (orderId: string, params: downloadInvoice.Query) => string;
}
