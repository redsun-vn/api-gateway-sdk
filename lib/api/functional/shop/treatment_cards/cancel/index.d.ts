import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ITreatmentCard } from "../../../../../libs/shared/src/types/order-service/itreatment-card";
export declare function cancelCard(connection: IConnection, id: string, input: cancelCard.Input): Promise<cancelCard.Output>;
export declare namespace cancelCard {
    type Input = Resolved<ITreatmentCard.ICancelCardRequest>;
    type Output = Primitive<IResponse<ITreatmentCard.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/treatment-cards/:id/cancel";
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
