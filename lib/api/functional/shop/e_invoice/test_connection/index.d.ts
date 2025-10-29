import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IEInvoice } from "../../../../../libs/shared/src/types/order-service/ie-invoice.type";
export declare function testConnection(connection: IConnection, data: testConnection.Input): Promise<testConnection.Output>;
export declare namespace testConnection {
    type Input = Resolved<IEInvoice.IEInvoiceTestConnectionInput>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/e-invoice/test-connection";
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
    const path: () => string;
}
