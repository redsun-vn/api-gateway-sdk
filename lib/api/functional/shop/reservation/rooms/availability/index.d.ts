import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IRoomStatus } from "../../../../../../libs/shared/src/types/reservation-service/iroom-status";
export declare function checkAvailability(connection: IConnection, id: string, query: checkAvailability.Query): Promise<checkAvailability.Output>;
export declare namespace checkAvailability {
    type Query = Resolved<IRoomStatus.IQueryDate>;
    type Output = Primitive<IResponse<IRoomStatus.IAvailabilityResult>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/rooms/:id/availability";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string, query: checkAvailability.Query) => string;
}
