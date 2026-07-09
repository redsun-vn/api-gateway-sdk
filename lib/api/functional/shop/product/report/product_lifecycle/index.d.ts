import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReportProduct } from "../../../../../../libs/shared/src/types/product-service/ireport.type";
export declare function getProductLifecycle(connection: IConnection, query: getProductLifecycle.Query): Promise<getProductLifecycle.Output>;
export declare namespace getProductLifecycle {
    type Query = Resolved<Omit<IReportProduct.ProductLifecycleQuery, "shopId">>;
    type Output = Primitive<IResponse<IReportProduct.IProductLifecycleResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/product/report/product-lifecycle";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getProductLifecycle.Query) => string;
}
