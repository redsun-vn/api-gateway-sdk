import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IReservation } from "../../../../libs/shared/src/types/reservation-service/ireservation";
export declare function getBookingConfig(connection: IConnection, query: getBookingConfig.Query): Promise<getBookingConfig.Output>;
export declare namespace getBookingConfig {
    type Query = Resolved<IReservation.IBookingConfigQuery>;
    type Output = Primitive<IResponse<IReservation.IBookingConfigResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/booking/configs";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getBookingConfig.Query) => string;
}
