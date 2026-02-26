import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiCreditPackage, IAiPaginationResult } from "../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function purchaseHistory(connection: IConnection, query: purchaseHistory.Query): Promise<purchaseHistory.Output>;
export declare namespace purchaseHistory {
    type Query = Resolved<IAiCreditPackage.IPurchaseHistoryQuery>;
    type Output = Primitive<IResponse<IAiPaginationResult<IAiCreditPackage.IPurchase>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ai/credit-packages/purchases";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: purchaseHistory.Query) => string;
}
