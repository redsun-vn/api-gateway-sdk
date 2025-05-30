import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IOrderRevenue } from "../../../../../libs/shared/src/types/report-service/iorder-revenue.type";
export * as $export from "./$export";
export * as $return from "./$return";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IOrderRevenue.IOrderRevenueResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/order-revenues";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function stats(connection: IConnection, query: stats.Query): Promise<stats.Output>;
export declare namespace stats {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IOrderRevenue.IOrderRevenueStats>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/order-revenues/stats";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: stats.Query) => string;
}
