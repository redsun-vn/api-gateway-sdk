import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReport } from "../../../../../../libs/shared/src/types/inventory-service/ireport-inventory.type";
export declare function getInventoryMovement(connection: IConnection, query: getInventoryMovement.Query): Promise<getInventoryMovement.Output>;
export declare namespace getInventoryMovement {
    type Query = Resolved<Omit<IReport.IInventoryMovementRequest, "shop_id">>;
    type Output = Primitive<IResponse<IReport.IInventoryMovementResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/report/movement";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getInventoryMovement.Query) => string;
}
