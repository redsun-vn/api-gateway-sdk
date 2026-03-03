import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ITreatmentCard } from "../../../../../libs/shared/src/types/order-service/itreatment-card";
export declare function cancelSession(connection: IConnection, id: string, input: cancelSession.Input): Promise<cancelSession.Output>;
export declare namespace cancelSession {
    type Input = Resolved<ITreatmentCard.ICancelSession>;
    type Output = Primitive<IResponse<ITreatmentCard.ISessionLogResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/treatment-cards/:id/cancel-session";
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
