import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IOrderRevenue } from "../../../../../libs/shared/src/types/report-service/iorder-revenue.type";
export declare function summary(connection: IConnection, query: summary.Query): Promise<summary.Output>;
export declare namespace summary {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<Array<IOrderRevenue.IOrderRevenueSummary>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/order-revenue/summary";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: summary.Query) => string;
}
