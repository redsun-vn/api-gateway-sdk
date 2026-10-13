import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISaleOrderActivity } from "../../../../../libs/shared/src/types/order-service/isale-order-activity";
export declare function listActivities(connection: IConnection, id: string, query: listActivities.Query): Promise<listActivities.Output>;
export declare namespace listActivities {
    type Query = Resolved<ISaleOrderActivity.IListQuery>;
    type Output = Primitive<IResponse<ISaleOrderActivity.IListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/sale-orders/:id/activities";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string, query: listActivities.Query) => string;
}
export declare function createActivity(connection: IConnection, id: string, body: createActivity.Input): Promise<createActivity.Output>;
export declare namespace createActivity {
    type Input = Resolved<ISaleOrderActivity.ICreateBody>;
    type Output = Primitive<IResponse<ISaleOrderActivity.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/sale-orders/:id/activities";
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
