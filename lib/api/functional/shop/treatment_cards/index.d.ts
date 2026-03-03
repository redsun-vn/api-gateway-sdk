import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { ITreatmentCard } from "../../../../libs/shared/src/types/order-service/itreatment-card";
export * as check_in from "./check_in";
export * as cancel_session from "./cancel_session";
export * as cancel from "./cancel";
export * as sessions from "./sessions";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<ITreatmentCard.IQuery>;
    type Output = Primitive<IResponse<Array<ITreatmentCard.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/treatment-cards";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<ITreatmentCard.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/treatment-cards/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function update(connection: IConnection, id: string, input: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<Omit<ITreatmentCard.IUpdate, "id">>;
    type Output = Primitive<IResponse<ITreatmentCard.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/treatment-cards/:id";
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
