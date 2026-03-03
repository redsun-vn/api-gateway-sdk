import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ITreatmentCard } from "../../../../../libs/shared/src/types/order-service/itreatment-card";
export declare function checkIn(connection: IConnection, id: string, input: checkIn.Input): Promise<checkIn.Output>;
export declare namespace checkIn {
    type Input = Resolved<ITreatmentCard.ICheckInRequest>;
    type Output = Primitive<IResponse<ITreatmentCard.ISessionLogResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/treatment-cards/:id/check-in";
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
    const path: (id: string) => string;
}
