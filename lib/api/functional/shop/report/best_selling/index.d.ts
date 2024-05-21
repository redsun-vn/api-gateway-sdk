import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IReportOrderItem } from "../../../../../libs/shared/src/types/report-service/iorder-items.type";
export declare function productBestSelling(connection: IConnection, query: productBestSelling.Query): Promise<productBestSelling.Output>;
export declare namespace productBestSelling {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IReportOrderItem.IProductBestSelling>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/best-selling";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (query: productBestSelling.Query) => string;
}
