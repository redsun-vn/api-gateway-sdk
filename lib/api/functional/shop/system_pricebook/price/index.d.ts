import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISystemPricebook } from "../../../../../libs/shared/src/types/shop-service/system-pricebook.type";
export declare function create(connection: IConnection, productId: number, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<Omit<ISystemPricebook.IProductPriceRequest, "productId">>;
    type Output = Primitive<IResponse<ISystemPricebook.IPriceCalculationResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/system-pricebook/:productId/price";
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
    const path: (productId: number) => string;
}
