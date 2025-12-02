import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IFinancialReport } from "../../../../../libs/shared/src/types/financial-service/financial-report.type";
export declare function getCashFlow(connection: IConnection, query: getCashFlow.Query): Promise<getCashFlow.Output>;
export declare namespace getCashFlow {
    type Query = Resolved<Omit<IFinancialReport.IDateRangeQuery, "shop_id">>;
    type Output = Primitive<IResponse<IFinancialReport.ICashFlowReport>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/financial-reports/cash-flow";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getCashFlow.Query) => string;
}
