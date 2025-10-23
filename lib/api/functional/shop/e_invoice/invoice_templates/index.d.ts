import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IEInvoice } from "../../../../../libs/shared/src/types/order-service/ie-invoice.type";
export declare function findInvoiceTemplates(connection: IConnection, shopId: string): Promise<findInvoiceTemplates.Output>;
export declare namespace findInvoiceTemplates {
    type Output = Primitive<IResponse<IResponsePagination<IEInvoice.IEInvoiceTemplateResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/e-invoice/:shopId/invoice-templates";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (shopId: string) => string;
}
