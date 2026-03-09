import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ITableHistory } from "../../../../../../../libs/shared/src/types/reservation-service/itable-history";
export declare function getEnhancedStats(connection: IConnection, tableId: string, filter: getEnhancedStats.Query): Promise<getEnhancedStats.Output>;
export declare namespace getEnhancedStats {
    type Query = Resolved<ITableHistory.IStatsFilter>;
    type Output = Primitive<IResponse<ITableHistory.ITableStatsEnhanced>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/tables/:tableId/stats/enhanced";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (tableId: string, filter: getEnhancedStats.Query) => string;
}
