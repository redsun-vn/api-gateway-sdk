import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { ILineItemReport } from "../../../../../libs/shared/src/types/report-service/line-item-report.type";
export declare function getOperationalPerformance(connection: IConnection, query: getOperationalPerformance.Query): Promise<getOperationalPerformance.Output>;
export declare namespace getOperationalPerformance {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ILineItemReport.IOperationalPerformanceItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/operational-performance";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getOperationalPerformance.Query) => string;
}
