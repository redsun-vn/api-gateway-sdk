import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function getEInvoiceStatus(connection: IConnection, orderId: string): Promise<getEInvoiceStatus.Output>;
export declare namespace getEInvoiceStatus {
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/e-invoice/:orderId/status";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (orderId: string) => string;
}
