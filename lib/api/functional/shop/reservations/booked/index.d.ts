import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IReservation } from "../../../../../libs/shared/src/types/reservation-service/ireservation";
export declare function findAllBooked(connection: IConnection): Promise<findAllBooked.Output>;
export declare namespace findAllBooked {
    type Output = Primitive<IResponse<IResponsePagination<IReservation.IReservationResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservations/booked";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
