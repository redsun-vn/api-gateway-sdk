import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { ILineItemReport } from "../../../../../libs/shared/src/types/report-service/line-item-report.type";
export declare function revenueByHourly(connection: IConnection, query: revenueByHourly.Query): Promise<revenueByHourly.Output>;
export declare namespace revenueByHourly {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ILineItemReport.IHourlyRevenueItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/revenue-by-hourly";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: revenueByHourly.Query) => string;
}
