import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReportLoyalty } from "../../../../../../libs/shared/src/types/loyalty-service/ireport";
export declare function getPointTransactions(connection: IConnection, query: getPointTransactions.Query): Promise<getPointTransactions.Output>;
export declare namespace getPointTransactions {
    type Query = Resolved<Omit<IReportLoyalty.IReportFilter, "shop_id">>;
    type Output = Primitive<IResponse<Array<IReportLoyalty.IPointTransactionMonthly>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/loyalty/report/point-transactions";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getPointTransactions.Query) => string;
}
