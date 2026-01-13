import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReportProduct } from "../../../../../../libs/shared/src/types/product-service/ireport.type";
export declare function getPerformance(connection: IConnection, query: getPerformance.Query): Promise<getPerformance.Output>;
export declare namespace getPerformance {
    type Query = Resolved<Omit<IReportProduct.ProductPerformanceQuery, "shopId">>;
    type Output = Primitive<IResponse<IReportProduct.IProductPerformanceResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/product/report/performance";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getPerformance.Query) => string;
}
