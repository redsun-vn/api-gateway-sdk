import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IEInvoice } from "../../../../libs/shared/src/types/order-service/ie-invoice.type";
import type { IFptInvoice } from "../../../../libs/shared/src/types/order-service/ifpt-invoice.type";
export * as publish_with_signature from "./publish_with_signature";
export * as download from "./download";
export * as test_connection from "./test_connection";
export * as upsert from "./upsert";
export declare function findOne(connection: IConnection, shopId: string, provider: IEInvoice.INVOICE_PROVIDER_ENUM): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IFptInvoice.IEInvoiceConfigResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/e-invoice/:provider/:shopId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (shopId: string, provider: IEInvoice.INVOICE_PROVIDER_ENUM) => string;
}
export declare function deactive(connection: IConnection, shopId: string, provider: IEInvoice.INVOICE_PROVIDER_ENUM): Promise<deactive.Output>;
export declare namespace deactive {
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/e-invoice/:provider/:shopId/deactive";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (shopId: string, provider: IEInvoice.INVOICE_PROVIDER_ENUM) => string;
}
