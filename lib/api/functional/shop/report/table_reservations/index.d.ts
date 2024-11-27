import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IReportOrderItem } from "../../../../../libs/shared/src/types/report-service/iorder-items.type";
export declare function tableReservationReport(connection: IConnection, query: tableReservationReport.Query): Promise<tableReservationReport.Output>;
export declare namespace tableReservationReport {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IReportOrderItem.ITableReservationReport>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/table-reservations";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: tableReservationReport.Query) => string;
}
