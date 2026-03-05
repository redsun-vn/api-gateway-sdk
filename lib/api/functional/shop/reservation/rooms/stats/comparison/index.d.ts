import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IRoomHistory } from "../../../../../../../libs/shared/src/types/reservation-service/iroom-history";
export declare function getComparison(connection: IConnection, roomId: string, filter: getComparison.Query): Promise<getComparison.Output>;
export declare namespace getComparison {
    type Query = Resolved<IRoomHistory.IComparisonFilter>;
    type Output = Primitive<IResponse<IRoomHistory.IPeriodComparison>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/rooms/:roomId/stats/comparison";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (roomId: string, filter: getComparison.Query) => string;
}
