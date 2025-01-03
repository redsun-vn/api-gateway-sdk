import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IReportOrderItem } from "../../../../../libs/shared/src/types/report-service/iorder-items.type";
export declare function staffOrderReport(connection: IConnection, query: staffOrderReport.Query): Promise<staffOrderReport.Output>;
export declare namespace staffOrderReport {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IReportOrderItem.IStaffOrderReport>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/staff-order";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: staffOrderReport.Query) => string;
}
