import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReportProduct } from "../../../../../../libs/shared/src/types/product-service/ireport.type";
export declare function getCategoryDistribution(connection: IConnection, query: getCategoryDistribution.Query): Promise<getCategoryDistribution.Output>;
export declare namespace getCategoryDistribution {
    type Query = Resolved<Omit<IReportProduct.CategoryDistributionQuery, "shopId">>;
    type Output = Primitive<IResponse<IReportProduct.ICategoryDistributionResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/product/report/category-distribution";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getCategoryDistribution.Query) => string;
}
