import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICollection } from "../../../../../../libs/shared/src/types/icollection";
export declare function findCollectionsByProductId(connection: IConnection, id: string): Promise<findCollectionsByProductId.Output>;
export declare namespace findCollectionsByProductId {
    type Output = Primitive<IResponse<Array<ICollection.IDetailCollectionResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/product/collection/collection_by_product/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
