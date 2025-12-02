import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IFinancialReport } from "../../../../../../libs/shared/src/types/financial-service/financial-report.type";
export declare function getLiquidityRatios(connection: IConnection, query: getLiquidityRatios.Query): Promise<getLiquidityRatios.Output>;
export declare namespace getLiquidityRatios {
    type Query = Resolved<Omit<IFinancialReport.IDateRangeQuery, "shop_id">>;
    type Output = Primitive<IResponse<IFinancialReport.ILiquidityRatios>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/financial-reports/ratios/liquidity";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getLiquidityRatios.Query) => string;
}
