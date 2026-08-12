import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IStockTransfer } from "../../../../../../libs/shared/src/types/inventory-service/istock-transfer.type";
export declare function receiveGoods(connection: IConnection, id: string, input: receiveGoods.Input): Promise<receiveGoods.Output>;
export declare namespace receiveGoods {
    type Input = Resolved<IStockTransfer.IReceiveStockTransfer>;
    type Output = Primitive<IResponse<IStockTransfer.IStockTransferResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/inventory/stock-transfers/:id/receive";
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
