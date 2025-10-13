import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IMobiInvoice } from "../../../../../libs/shared/src/types/order-service/imobi-invoice.type";
export declare function publishInvoiceWithSignature(connection: IConnection, orderId: string, data: publishInvoiceWithSignature.Input): Promise<publishInvoiceWithSignature.Output>;
export declare namespace publishInvoiceWithSignature {
    type Input = Resolved<IMobiInvoice.IPublishRequest>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mobi-invoice/publish-with-signature/:orderId";
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
    const path: (orderId: string) => string;
}
