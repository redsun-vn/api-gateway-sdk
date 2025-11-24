import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { ILoyaltyReport } from "../../../../../libs/shared/src/types/report-service/iloyalty-report.type";
export declare function getMemberLevelReport(connection: IConnection, query: getMemberLevelReport.Query): Promise<getMemberLevelReport.Output>;
export declare namespace getMemberLevelReport {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ILoyaltyReport.MemberLevelReportDto>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reports/loyalty-member-level";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getMemberLevelReport.Query) => string;
}
