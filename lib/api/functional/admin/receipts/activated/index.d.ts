import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IReceipt } from "../../../../../libs/shared/src/types/shop-service/receipt.type";
export declare function activateReceipt(connection: IConnection, id: string, data: activateReceipt.Input): Promise<activateReceipt.Output>;
export declare namespace activateReceipt {
    type Input = Resolved<IReceipt.IActivateReceipt>;
    type Output = Primitive<IResponse<IReceipt.ActivateReceiptSimpleResult>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/receipts/:id/activated";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
