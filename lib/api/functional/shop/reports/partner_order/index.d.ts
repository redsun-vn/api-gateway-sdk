import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IPartnerReport } from "../../../../../libs/shared/src/types/report-service/ipartner-report.type";
export declare function getPartnerOrderReport(connection: IConnection, query: getPartnerOrderReport.Query): Promise<getPartnerOrderReport.Output>;
export declare namespace getPartnerOrderReport {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IPartnerReport.IPartnerOrderReportResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reports/partner-order";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getPartnerOrderReport.Query) => string;
}
export declare function getPartnerDetailReport(connection: IConnection, query: getPartnerDetailReport.Query, partnerId: string): Promise<getPartnerDetailReport.Output>;
export declare namespace getPartnerDetailReport {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IPartnerReport.IPartnerOrderReportResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reports/partner-order/:partner_id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getPartnerDetailReport.Query, partnerId: string) => string;
}
