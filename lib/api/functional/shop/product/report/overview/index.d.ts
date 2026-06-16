import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReportProduct } from "../../../../../../libs/shared/src/types/product-service/ireport.type";
export declare function getOverview(connection: IConnection, query: getOverview.Query): Promise<getOverview.Output>;
export declare namespace getOverview {
    type Query = Resolved<Omit<IReportProduct.BaseReportQuery, "shopId">>;
    type Output = Primitive<IResponse<IReportProduct.IProductOverviewResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/product/report/overview";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getOverview.Query) => string;
}
