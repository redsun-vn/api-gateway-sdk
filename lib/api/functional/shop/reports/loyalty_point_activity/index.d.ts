import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { ILoyaltyReport } from "../../../../../libs/shared/src/types/report-service/iloyalty-report.type";
export declare function getPointActivityReport(connection: IConnection, query: getPointActivityReport.Query): Promise<getPointActivityReport.Output>;
export declare namespace getPointActivityReport {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ILoyaltyReport.PointActivityReportDto>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reports/loyalty-point-activity";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getPointActivityReport.Query) => string;
}
