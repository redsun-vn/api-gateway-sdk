import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { ILineItemReport } from "../../../../../libs/shared/src/types/report-service/line-item-report.type";
export declare function categorySelling(connection: IConnection, query: categorySelling.Query): Promise<categorySelling.Output>;
export declare namespace categorySelling {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ILineItemReport.ICategoryItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/categories-selling";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: categorySelling.Query) => string;
}
