import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IFinancialReport } from "../../../../../libs/shared/src/types/financial-service/financial-report.type";
export declare function getReceivables(connection: IConnection, query: getReceivables.Query): Promise<getReceivables.Output>;
export declare namespace getReceivables {
    type Query = Resolved<Omit<IFinancialReport.IDateRangeQuery, "shop_id">>;
    type Output = Primitive<IResponse<IFinancialReport.IReceivableReport>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/financial-reports/receivables";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getReceivables.Query) => string;
}
