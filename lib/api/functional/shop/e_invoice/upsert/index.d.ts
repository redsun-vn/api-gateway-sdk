import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IEInvoice } from "../../../../../libs/shared/src/types/order-service/ie-invoice.type";
import type { IFptInvoice } from "../../../../../libs/shared/src/types/order-service/ifpt-invoice.type";
export declare function upsertConfig(connection: IConnection, shopId: string, provider: IEInvoice.INVOICE_PROVIDER_ENUM, data: upsertConfig.Input): Promise<upsertConfig.Output>;
export declare namespace upsertConfig {
    type Input = Resolved<IFptInvoice.IFptShopConfigInput>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/e-invoice/:provider/:shopId/upsert";
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
    const path: (shopId: string, provider: IEInvoice.INVOICE_PROVIDER_ENUM) => string;
}
