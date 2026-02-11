import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISystemPricebook } from "../../../../../libs/shared/src/types/shop-service/system-pricebook.type";
export declare function getApplicablePrice(connection: IConnection, productId: string, data: getApplicablePrice.Input): Promise<getApplicablePrice.Output>;
export declare namespace getApplicablePrice {
    type Input = Resolved<Omit<ISystemPricebook.IApplicablePricebookRequest, "productId">>;
    type Output = Primitive<IResponse<ISystemPricebook.IApplicablePricebookResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/system-pricebook/:productId/applicable-price";
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
    const path: (productId: string) => string;
}
