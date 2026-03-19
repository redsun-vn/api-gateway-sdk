import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IReservation } from "../../../../libs/shared/src/types/reservation-service/ireservation";
export declare function createReservation(connection: IConnection, data: createReservation.Input): Promise<createReservation.Output>;
export declare namespace createReservation {
    type Input = Resolved<IReservation.IGuestReservationCreate>;
    type Output = Primitive<IResponse<IReservation.IGuestReservationResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/booking/reserve";
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
    const path: () => string;
}
