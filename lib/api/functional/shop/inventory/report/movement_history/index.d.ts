import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReport } from "../../../../../../libs/shared/src/types/inventory-service/ireport-inventory.type";
export declare function getMovementHistory(connection: IConnection, query: getMovementHistory.Query): Promise<getMovementHistory.Output>;
export declare namespace getMovementHistory {
    type Query = Resolved<IReport.IStockDetailRequest>;
    type Output = Primitive<IResponse<IReport.IStockMovementHistoryResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/report/movement-history";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getMovementHistory.Query) => string;
}
