import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IAdminReceipt } from "../../../../../libs/shared/src/types/report-service/iadmin-receipt-report.type";
export declare function getReportPackageReceipt(connection: IConnection, query: getReportPackageReceipt.Query): Promise<getReportPackageReceipt.Output>;
export declare namespace getReportPackageReceipt {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IAdminReceipt.IPackageReport>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/reports/package-receipts";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getReportPackageReceipt.Query) => string;
}
