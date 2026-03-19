import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IReservation } from "../../../../libs/shared/src/types/reservation-service/ireservation";
export declare function checkAvailability(connection: IConnection, query: checkAvailability.Query): Promise<checkAvailability.Output>;
export declare namespace checkAvailability {
    type Query = Resolved<IReservation.IBookingAvailabilityQuery>;
    type Output = Primitive<IResponse<IReservation.IBookingAvailabilityResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/booking/availability";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: checkAvailability.Query) => string;
}
