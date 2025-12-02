import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IFinancialReport } from "../../../../../libs/shared/src/types/financial-service/financial-report.type";
export declare function getSummary(connection: IConnection, query: getSummary.Query): Promise<getSummary.Output>;
export declare namespace getSummary {
    type Query = Resolved<Omit<IFinancialReport.IDateRangeQuery, "shop_id">>;
    type Output = Primitive<IResponse<IFinancialReport.IFinancialSummary>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/financial-reports/summary";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getSummary.Query) => string;
}
