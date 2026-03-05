import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IRoomHistory } from "../../../../../../libs/shared/src/types/reservation-service/iroom-history";
export * as enhanced from "./enhanced";
export * as comparison from "./comparison";
export declare function getStats(connection: IConnection, roomId: string): Promise<getStats.Output>;
export declare namespace getStats {
    type Output = Primitive<IResponse<IRoomHistory.IRoomStats>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/rooms/:roomId/stats";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (roomId: string) => string;
}
