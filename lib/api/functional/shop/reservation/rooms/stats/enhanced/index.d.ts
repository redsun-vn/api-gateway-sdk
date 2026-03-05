import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IRoomHistory } from "../../../../../../../libs/shared/src/types/reservation-service/iroom-history";
export declare function getEnhancedStats(connection: IConnection, roomId: string, filter: getEnhancedStats.Query): Promise<getEnhancedStats.Output>;
export declare namespace getEnhancedStats {
    type Query = Resolved<IRoomHistory.IStatsFilter>;
    type Output = Primitive<IResponse<IRoomHistory.IRoomStatsEnhanced>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/rooms/:roomId/stats/enhanced";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (roomId: string, filter: getEnhancedStats.Query) => string;
}
