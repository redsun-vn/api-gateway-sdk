import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReport } from "../../../../../../libs/shared/src/types/inventory-service/ireport-inventory.type";
export declare function getExpiringStock(connection: IConnection, query: getExpiringStock.Query): Promise<getExpiringStock.Output>;
export declare namespace getExpiringStock {
    type Query = Resolved<IReport.IReportFilterRequest>;
    type Output = Primitive<IResponse<IReport.IExpiringStockResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/report/expiring-stock";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getExpiringStock.Query) => string;
}
