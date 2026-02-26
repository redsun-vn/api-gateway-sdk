import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAiCreditPackage } from "../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export * as purchases from "./purchases";
export declare function listActive(connection: IConnection): Promise<listActive.Output>;
export declare namespace listActive {
    type Output = Primitive<IResponse<Array<IAiCreditPackage.ICreditPackage>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ai/credit-packages";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function purchase(connection: IConnection, packageId: number): Promise<purchase.Output>;
export declare namespace purchase {
    type Output = Primitive<IResponse<IAiCreditPackage.IPurchase>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ai/credit-packages/:id/purchase";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (packageId: number) => string;
}
