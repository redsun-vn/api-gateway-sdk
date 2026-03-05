import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IRoomHistory } from "../../../../../../libs/shared/src/types/reservation-service/iroom-history";
export declare function getTimeline(connection: IConnection, roomId: string, filter: getTimeline.Query): Promise<getTimeline.Output>;
export declare namespace getTimeline {
    type Query = Resolved<IRoomHistory.ITimelineFilter>;
    type Output = Primitive<IResponse<IRoomHistory.ITimelineResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/rooms/:roomId/history";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (roomId: string, filter: getTimeline.Query) => string;
}
