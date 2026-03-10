import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IReservationNote } from "../../../../../libs/shared/src/types/reservation-service/ireservation-note";
export declare function updateStatus(connection: IConnection, id: string, data: updateStatus.Input): Promise<updateStatus.Output>;
export declare namespace updateStatus {
    type Input = Resolved<IReservationNote.IUpdateStatus>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/reservation/reservation_note_status/:id";
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
