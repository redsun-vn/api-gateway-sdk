import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMobiInvoice } from "../../../../../libs/shared/src/types/order-service/imobi-invoice.type";
export declare function getInvoiceTemplates(connection: IConnection, shopId: string): Promise<getInvoiceTemplates.Output>;
export declare namespace getInvoiceTemplates {
    type Output = Primitive<IResponse<IMobiInvoice.IGetInvoiceTemplatesResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mobi-invoice/:shopId/templates";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (shopId: string) => string;
}
