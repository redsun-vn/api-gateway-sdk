import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IFinancialReport } from "../../../../../libs/shared/src/types/financial-service/financial-report.type";
export declare function getProfitLoss(connection: IConnection, query: getProfitLoss.Query): Promise<getProfitLoss.Output>;
export declare namespace getProfitLoss {
    type Query = Resolved<Omit<IFinancialReport.IDateRangeQuery, "shop_id">>;
    type Output = Primitive<IResponse<IFinancialReport.IProfitLossReport>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/financial-reports/profit-loss";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getProfitLoss.Query) => string;
}
