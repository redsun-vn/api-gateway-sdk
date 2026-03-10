import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ITableHistory } from "../../../../../libs/shared/src/types/reservation-service/itable-history";
export declare function getComparison(connection: IConnection, tableId: string, filter: getComparison.Query): Promise<getComparison.Output>;
export declare namespace getComparison {
    type Query = Resolved<ITableHistory.IComparisonFilter>;
    type Output = Primitive<IResponse<ITableHistory.IPeriodComparison>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/table_stats_comparison/:tableId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (tableId: string, filter: getComparison.Query) => string;
}
