import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IReceipt } from "../../../../libs/shared/src/types/shop-service/receipt.type";
export declare function stats(connection: IConnection, query: stats.Query): Promise<stats.Output>;
export declare namespace stats {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IReceipt.IStats>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/receipts_stats";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: stats.Query) => string;
}
