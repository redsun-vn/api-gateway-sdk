import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IReceipt } from "../../../../libs/shared/src/types/shop-service/receipt.type";
export declare function getRefundStats(connection: IConnection, query: getRefundStats.Query): Promise<getRefundStats.Output>;
export declare namespace getRefundStats {
    type Query = Resolved<IReceipt.IRefundStatsFilter>;
    type Output = Primitive<IResponse<IReceipt.IRefundStats>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/receipts-refund-stats";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getRefundStats.Query) => string;
}
