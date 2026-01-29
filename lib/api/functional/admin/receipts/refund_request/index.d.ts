import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IReceipt } from "../../../../../libs/shared/src/types/shop-service/receipt.type";
export declare function requestRefund(connection: IConnection, id: string, data: requestRefund.Input): Promise<requestRefund.Output>;
export declare namespace requestRefund {
    type Input = Resolved<Omit<IReceipt.IRefundRequest, "id">>;
    type Output = Primitive<IResponse<IReceipt.IRefundResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/receipts/:id/refund-request";
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
