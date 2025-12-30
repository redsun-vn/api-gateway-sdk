import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReport } from "../../../../../../libs/shared/src/types/inventory-service/ireport-inventory.type";
export declare function getInventoryOverview(connection: IConnection, query: getInventoryOverview.Query): Promise<getInventoryOverview.Output>;
export declare namespace getInventoryOverview {
    type Query = Resolved<Omit<IReport.IInventoryOverviewRequest, "shop_id">>;
    type Output = Primitive<IResponse<IReport.IInventoryOverviewResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/report/overview";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getInventoryOverview.Query) => string;
}
