import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReport } from "../../../../../../libs/shared/src/types/inventory-service/ireport-inventory.type";
export declare function getStockStatus(connection: IConnection, query: getStockStatus.Query): Promise<getStockStatus.Output>;
export declare namespace getStockStatus {
    type Query = Resolved<Omit<IReport.IReportFilterRequest, "shop_id">>;
    type Output = Primitive<IResponse<IReport.IStockStatusResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/report/stock-status";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getStockStatus.Query) => string;
}
