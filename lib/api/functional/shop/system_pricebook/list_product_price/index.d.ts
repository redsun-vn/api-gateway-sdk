import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISystemPricebook } from "../../../../../libs/shared/src/types/shop-service/system-pricebook.type";
export declare function getListProductPrice(connection: IConnection, data: getListProductPrice.Input): Promise<getListProductPrice.Output>;
export declare namespace getListProductPrice {
    type Input = Resolved<Omit<ISystemPricebook.IListApplicablePricebookRequest, "shopId">>;
    type Output = Primitive<IResponse<ISystemPricebook.IListApplicablePricebookResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/system-pricebook/list-product-price";
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
