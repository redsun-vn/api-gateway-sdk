import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { E_INVOICE_PROVIDER_ENUM } from "../../../../libs/shared/src/enum/shop-service/index";
import type { IQuery, IResponse, IResponsePagination } from "../../../../libs/shared/src/types/common.type";
import type { IEInvoice } from "../../../../libs/shared/src/types/order-service/ie-invoice.type";
export * as publish_with_signature from "./publish_with_signature";
export * as download from "./download";
export * as upsert from "./upsert";
export * as invoice_templates from "./invoice_templates";
export declare function findAll(connection: IConnection, shopId: string, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IEInvoice.IEInvoiceConfigResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/e-invoice/:shopId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (shopId: string, query: findAll.Query) => string;
}
export declare function findOne(connection: IConnection, shopId: string, provider: E_INVOICE_PROVIDER_ENUM): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IEInvoice.IEInvoiceConfigResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/e-invoice/:shopId/:provider";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (shopId: string, provider: E_INVOICE_PROVIDER_ENUM) => string;
}
export declare function $delete(connection: IConnection, shopId: string, provider: E_INVOICE_PROVIDER_ENUM): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/e-invoice/:shopId/:provider";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (shopId: string, provider: E_INVOICE_PROVIDER_ENUM) => string;
}
