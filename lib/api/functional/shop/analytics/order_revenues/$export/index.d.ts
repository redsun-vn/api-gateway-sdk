import type { IConnection, Resolved } from "@nestia/fetcher";
import type { IQueryReportExport } from "../../../../../../libs/shared/src/const/report";
export declare function revenueByPeriodExport(connection: IConnection, query: revenueByPeriodExport.Query): Promise<void>;
export declare namespace revenueByPeriodExport {
    type Query = Resolved<IQueryReportExport>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/analytics/order-revenues/export";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: revenueByPeriodExport.Query) => string;
}
