import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IEInvoice } from "../../../../../libs/shared/src/types/order-service/ie-invoice.type";
export declare function testConnection(connection: IConnection, provider: IEInvoice.INVOICE_PROVIDER_ENUM, shopId: string): Promise<testConnection.Output>;
export declare namespace testConnection {
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/e-invoice/:provider/:shopId/test-connection";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (provider: IEInvoice.INVOICE_PROVIDER_ENUM, shopId: string) => string;
}
