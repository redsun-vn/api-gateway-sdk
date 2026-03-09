import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ITableHistory } from "../../../../../../libs/shared/src/types/reservation-service/itable-history";
export declare function getTimeline(connection: IConnection, tableId: string, filter: getTimeline.Query): Promise<getTimeline.Output>;
export declare namespace getTimeline {
    type Query = Resolved<ITableHistory.ITimelineFilter>;
    type Output = Primitive<IResponse<ITableHistory.ITimelineResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/tables/:tableId/history";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (tableId: string, filter: getTimeline.Query) => string;
}
