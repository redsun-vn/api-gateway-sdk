import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IReportOrderItem } from "../../../../../libs/shared/src/types/report-service/iorder-items.type";
export declare function staffBestSelling(connection: IConnection, query: staffBestSelling.Query): Promise<staffBestSelling.Output>;
export declare namespace staffBestSelling {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IReportOrderItem.IStaffBestSelling>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/staff-selling";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (query: staffBestSelling.Query) => string;
}
