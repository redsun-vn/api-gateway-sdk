import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IProduct } from "../../../../../libs/shared/src/types/product-service/iproduct";
export declare function createCopy(connection: IConnection, productId: string, condition: createCopy.Input): Promise<createCopy.Output>;
export declare namespace createCopy {
    type Input = Primitive<IProduct.IProductCopyCondition>;
    type Output = Primitive<IResponse<IProduct.IProductResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/products/:id/copy";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (productId: string) => string;
}
