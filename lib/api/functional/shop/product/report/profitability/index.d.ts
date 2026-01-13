import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReportProduct } from "../../../../../../libs/shared/src/types/product-service/ireport.type";
export declare function getProfitability(connection: IConnection, query: getProfitability.Query): Promise<getProfitability.Output>;
export declare namespace getProfitability {
    type Query = Resolved<Omit<IReportProduct.ProfitabilityQuery, "shopId">>;
    type Output = Primitive<IResponse<IReportProduct.IProfitabilityResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/product/report/profitability";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getProfitability.Query) => string;
}
