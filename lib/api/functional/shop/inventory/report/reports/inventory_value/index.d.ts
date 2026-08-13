import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IReport } from "../../../../../../../libs/shared/src/types/inventory-service/ireport-inventory.type";
export declare function getInventoryValue(connection: IConnection, query: getInventoryValue.Query): Promise<getInventoryValue.Output>;
export declare namespace getInventoryValue {
    type Query = Resolved<IReport.IWarehouseScopedQuery>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/report/reports/inventory-value";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getInventoryValue.Query) => string;
}
