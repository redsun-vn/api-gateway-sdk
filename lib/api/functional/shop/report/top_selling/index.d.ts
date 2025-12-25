import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { ILineItemReport } from "../../../../../libs/shared/src/types/report-service/line-item-report.type";
export declare function topSelling(connection: IConnection, query: topSelling.Query): Promise<topSelling.Output>;
export declare namespace topSelling {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ILineItemReport.ITopSellingItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/top-selling";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: topSelling.Query) => string;
}
