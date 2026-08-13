import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IStockLot } from "../../../../../../libs/shared/src/types/inventory-service/istock-lot.type";
export declare function availableByLot(connection: IConnection, query: availableByLot.Query): Promise<availableByLot.Output>;
export declare namespace availableByLot {
    type Query = Resolved<IStockLot.IAvailableByLotQuery>;
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/stock-lots/available-by-lot";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: availableByLot.Query) => string;
}
