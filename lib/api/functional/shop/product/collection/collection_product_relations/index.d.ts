import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IQuery, IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IProductCollectionView } from "../../../../../../libs/shared/src/types/iproduct-collection-view.type";
export declare function findProductCollectionRelation(connection: IConnection, query: findProductCollectionRelation.Query): Promise<findProductCollectionRelation.Output>;
export declare namespace findProductCollectionRelation {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<Array<IProductCollectionView.IProductCollectionViewResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/product/collection/collection_product_relations";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (query: findProductCollectionRelation.Query) => string;
}
