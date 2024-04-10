import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IReservation } from "../../../../../libs/shared/src/types/reservation-service/ireservation";
export declare function findAllBooked(connection: IConnection, query: findAllBooked.Query): Promise<findAllBooked.Output>;
export declare namespace findAllBooked {
    type Query = Resolved<IQuery>;
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
    const path: (query: findAllBooked.Query) => string;
}
