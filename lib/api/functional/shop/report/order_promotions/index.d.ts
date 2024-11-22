import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IReportOrderItem } from "../../../../../libs/shared/src/types/report-service/iorder-items.type";
export declare function orderPromotionReport(connection: IConnection, query: orderPromotionReport.Query): Promise<orderPromotionReport.Output>;
export declare namespace orderPromotionReport {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IReportOrderItem.IOrderPromotionReport>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/order-promotions";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: orderPromotionReport.Query) => string;
}
