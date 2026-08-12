import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IStocktakeLine } from "../../../../../../libs/shared/src/types/inventory-service/istocktake-line.type";
export declare function countByBarcode(connection: IConnection, id: string, input: countByBarcode.Input): Promise<countByBarcode.Output>;
export declare namespace countByBarcode {
    type Input = Resolved<IStocktakeLine.ICountByBarcode>;
    type Output = Primitive<IResponse<IStocktakeLine.IStocktakeLineResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/stocktakes/:id/count-by-barcode";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
