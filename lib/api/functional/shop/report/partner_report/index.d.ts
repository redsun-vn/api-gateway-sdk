import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IPartnerReport } from "../../../../../libs/shared/src/types/report-service/ipartner-report.type";
export declare function getPartnerReport(connection: IConnection, query: getPartnerReport.Query): Promise<getPartnerReport.Output>;
export declare namespace getPartnerReport {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IPartnerReport.IPartnerReportResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/partner-report";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getPartnerReport.Query) => string;
}
export declare function getPartnerDetailReport(connection: IConnection, query: getPartnerDetailReport.Query, partnerId: string): Promise<getPartnerDetailReport.Output>;
export declare namespace getPartnerDetailReport {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IPartnerReport.IPartnerReportResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/partner-report/:partner_id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getPartnerDetailReport.Query, partnerId: string) => string;
}
