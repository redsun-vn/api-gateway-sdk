import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiCreditPackage } from "../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function adminPurchase(connection: IConnection, id: number, data: adminPurchase.Input): Promise<adminPurchase.Output>;
export declare namespace adminPurchase {
    type Input = Resolved<IAiCreditPackage.IAdminPurchaseRequest>;
    type Output = Primitive<IResponse<IAiCreditPackage.IPurchase>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/ai/credit-packages/:id/purchase";
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
    const path: (id: number) => string;
}
