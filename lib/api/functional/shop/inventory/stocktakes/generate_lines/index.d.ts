import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IStocktake } from "../../../../../../libs/shared/src/types/inventory-service/istocktake.type";
export declare function generateLines(connection: IConnection, id: string): Promise<generateLines.Output>;
export declare namespace generateLines {
    type Output = Primitive<IResponse<IStocktake.IStocktakeResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/stocktakes/:id/generate-lines";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
