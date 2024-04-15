import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IOrderRevenue } from "../../../../../libs/shared/src/types/report-service/iorder-revenue.type";
export declare function findCompleted(connection: IConnection, query: findCompleted.Query): Promise<findCompleted.Output>;
export declare namespace findCompleted {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IOrderRevenue.IOrderRevenueResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/order-profits";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (query: findCompleted.Query) => string;
}
