import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReport } from "../../../../../../libs/shared/src/types/inventory-service/ireport-inventory.type";
export declare function getDailyReport(connection: IConnection, query: getDailyReport.Query): Promise<getDailyReport.Output>;
export declare namespace getDailyReport {
    type Query = Resolved<IReport.IReportFilterRequest>;
    type Output = Primitive<IResponse<IReport.IDailyReportResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/report/daily";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getDailyReport.Query) => string;
}
