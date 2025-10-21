import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IEInvoice } from "../../../../../libs/shared/src/types/order-service/ie-invoice.type";
export declare function upsertConfig(connection: IConnection, shopId: string, data: upsertConfig.Input): Promise<upsertConfig.Output>;
export declare namespace upsertConfig {
    type Input = Resolved<IEInvoice.IEInvoiceConfigRequest>;
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/e-invoice/:shopId/upsert";
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
    const path: (shopId: string) => string;
}
