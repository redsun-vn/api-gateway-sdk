import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IProduct } from "../../../../../../libs/shared/src/types/product-service/iproduct";
export declare function findProductsByCollectionId(connection: IConnection, id: string): Promise<findProductsByCollectionId.Output>;
export declare namespace findProductsByCollectionId {
    type Output = Primitive<IResponse<Array<IProduct.IProductResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/product/collection/product_by_collection/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
