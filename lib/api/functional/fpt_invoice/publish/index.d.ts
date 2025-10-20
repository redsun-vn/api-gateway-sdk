import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IFptInvoice } from "../../../../libs/shared/src/types/order-service/ifpt-invoice.type";
export declare function publishInvoiceNormal(connection: IConnection, orderId: string, data: publishInvoiceNormal.Input): Promise<publishInvoiceNormal.Output>;
export declare namespace publishInvoiceNormal {
    type Input = Resolved<IFptInvoice.IPublishRequest>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/fpt-invoice/publish/:orderId";
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
