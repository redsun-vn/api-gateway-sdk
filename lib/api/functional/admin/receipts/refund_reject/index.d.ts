import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IReceipt } from "../../../../../libs/shared/src/types/shop-service/receipt.type";
export declare function rejectRefund(connection: IConnection, id: string, data: rejectRefund.Input): Promise<rejectRefund.Output>;
export declare namespace rejectRefund {
    type Input = Resolved<Omit<IReceipt.IRefundReject, "id">>;
    type Output = Primitive<IResponse<IReceipt.IRefundResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/receipts/:id/refund-reject";
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
