import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { ITreatmentCard } from "../../../../../libs/shared/src/types/order-service/itreatment-card";
export * as consumed_items from "./consumed_items";
export declare function findAllSessions(connection: IConnection, query: findAllSessions.Query): Promise<findAllSessions.Output>;
export declare namespace findAllSessions {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ITreatmentCard.ISessionLogResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/treatment-cards/sessions";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllSessions.Query) => string;
}
