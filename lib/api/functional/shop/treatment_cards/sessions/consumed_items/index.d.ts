import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ITreatmentCard } from "../../../../../../libs/shared/src/types/order-service/itreatment-card";
export declare function getConsumedItems(connection: IConnection, cardId: string, logId: string): Promise<getConsumedItems.Output>;
export declare namespace getConsumedItems {
    type Output = Primitive<IResponse<Array<ITreatmentCard.IConsumedItemResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/treatment-cards/:cardId/sessions/:logId/consumed-items";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (cardId: string, logId: string) => string;
}
