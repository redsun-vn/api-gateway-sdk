import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ILoyaltyReport } from "../../../../../libs/shared/src/types/report-service/iloyalty-report.type";
export declare function getMemberSummaryReport(connection: IConnection, query: getMemberSummaryReport.Query): Promise<getMemberSummaryReport.Output>;
export declare namespace getMemberSummaryReport {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<ILoyaltyReport.LoyaltySummaryReportDto>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reports/loyalty-member-summary";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getMemberSummaryReport.Query) => string;
}
