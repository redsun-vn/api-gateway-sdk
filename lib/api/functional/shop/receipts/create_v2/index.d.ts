import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IReceipt } from "../../../../../libs/shared/src/types/shop-service/receipt.type";
export declare function createSubsFromReceiptV2(connection: IConnection, data: createSubsFromReceiptV2.Input): Promise<createSubsFromReceiptV2.Output>;
export declare namespace createSubsFromReceiptV2 {
    type Input = Resolved<Omit<IReceipt.IShopCreateV2, "shopId">>;
    type Output = Primitive<IResponse<IReceipt.ReceiptSimpleResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/receipts/create-v2";
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
    const path: () => string;
}
