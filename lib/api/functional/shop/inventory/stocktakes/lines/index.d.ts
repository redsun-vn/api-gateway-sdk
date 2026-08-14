import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IStocktakeLine } from "../../../../../../libs/shared/src/types/inventory-service/istocktake-line.type";
export declare function findLines(connection: IConnection, id: string): Promise<findLines.Output>;
export declare namespace findLines {
    type Output = Primitive<IResponse<Array<IStocktakeLine.IStocktakeLineResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/stocktakes/:id/lines";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
