import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IReservationNote } from "../../../../../libs/shared/src/types/reservation-service/ireservation-note";
export declare function create(connection: IConnection, reservationId: string, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IReservationNote.ICreate>;
    type Output = Primitive<IResponse<IReservationNote.IReservationNoteResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/reservation/reservation_notes/:reservationId";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (reservationId: string) => string;
}
export declare function findByReservation(connection: IConnection, reservationId: string, filter: findByReservation.Query): Promise<findByReservation.Output>;
export declare namespace findByReservation {
    type Query = Resolved<IReservationNote.IFilter>;
    type Output = Primitive<IResponse<IResponsePagination<IReservationNote.IReservationNoteResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/reservation_notes/:reservationId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (reservationId: string, filter: findByReservation.Query) => string;
}
export declare function update(connection: IConnection, id: string, data: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<Partial<Omit<IReservationNote.ICreate, "shop_id" | "branch_id" | "reservation_id">>>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/reservation/reservation_notes/:id";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
