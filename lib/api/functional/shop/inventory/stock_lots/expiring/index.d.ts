import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IStockLot } from "../../../../../../libs/shared/src/types/inventory-service/istock-lot.type";
export declare function findExpiring(connection: IConnection, query: findExpiring.Query): Promise<findExpiring.Output>;
export declare namespace findExpiring {
    type Query = Resolved<IStockLot.IExpiringLotQuery>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/stock-lots/expiring";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findExpiring.Query) => string;
}
