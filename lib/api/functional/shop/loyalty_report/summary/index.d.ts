import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IReportLoyalty } from "../../../../../libs/shared/src/types/loyalty-service/ireport";
export declare function getSummary(connection: IConnection, query: getSummary.Query): Promise<getSummary.Output>;
export declare namespace getSummary {
    type Query = Resolved<Omit<IReportLoyalty.IReportFilter, "shop_id">>;
    type Output = Primitive<IResponse<IReportLoyalty.ISummaryStatistics>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/loyalty-report/summary";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getSummary.Query) => string;
}
