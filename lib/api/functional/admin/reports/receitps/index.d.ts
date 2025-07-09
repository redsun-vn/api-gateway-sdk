import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IAdminReceipt } from "../../../../../libs/shared/src/types/report-service/iadmin-receipt-report.type";
export declare function getReportReceipt(connection: IConnection, query: getReportReceipt.Query): Promise<getReportReceipt.Output>;
export declare namespace getReportReceipt {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IAdminReceipt.IReceiptReportResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/reports/receitps";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getReportReceipt.Query) => string;
}
