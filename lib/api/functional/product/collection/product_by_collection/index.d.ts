import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IProduct } from "../../../../../libs/shared/src/types/product-service/iproduct";
export declare function findProductsByCollectionId(connection: IConnection, id: string, query: findProductsByCollectionId.Query): Promise<findProductsByCollectionId.Output>;
export declare namespace findProductsByCollectionId {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<Array<IProduct.IProductResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/product/collection/product_by_collection/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string, query: findProductsByCollectionId.Query) => string;
}
