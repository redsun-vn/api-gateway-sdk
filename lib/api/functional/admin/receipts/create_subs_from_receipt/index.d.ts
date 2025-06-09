import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IReceipt } from "../../../../../libs/shared/src/types/shop-service/receipt.type";
export declare function createSubsFromReceipt(connection: IConnection, data: createSubsFromReceipt.Input): Promise<createSubsFromReceipt.Output>;
export declare namespace createSubsFromReceipt {
    type Input = Resolved<IReceipt.ICreatSubsFromReceiptAdminReq>;
    type Output = Primitive<IResponse<IReceipt.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/receipts/create-subs-from-receipt";
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
