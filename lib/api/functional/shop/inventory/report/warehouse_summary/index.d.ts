import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReport } from "../../../../../../libs/shared/src/types/inventory-service/ireport-inventory.type";
export declare function getWarehouseSummary(connection: IConnection, query: getWarehouseSummary.Query): Promise<getWarehouseSummary.Output>;
export declare namespace getWarehouseSummary {
    type Query = Resolved<IReport.IReportFilterRequest>;
    type Output = Primitive<IResponse<IReport.IWarehouseSummaryResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/report/warehouse-summary";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getWarehouseSummary.Query) => string;
}
