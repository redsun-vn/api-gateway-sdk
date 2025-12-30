import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReport } from "../../../../../../libs/shared/src/types/inventory-service/ireport-inventory.type";
export declare function getInventoryTurnover(connection: IConnection, query: getInventoryTurnover.Query): Promise<getInventoryTurnover.Output>;
export declare namespace getInventoryTurnover {
    type Query = Resolved<IReport.IInventoryTurnoverRequest>;
    type Output = Primitive<IResponse<IReport.IInventoryTurnoverResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/report/turnover";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getInventoryTurnover.Query) => string;
}
