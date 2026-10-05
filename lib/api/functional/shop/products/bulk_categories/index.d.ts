import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IProductBulk } from "../../../../../libs/shared/src/types/product-service/iproduct-bulk";
export declare function bulkAssignCategories(connection: IConnection, input: bulkAssignCategories.Input): Promise<bulkAssignCategories.Output>;
export declare namespace bulkAssignCategories {
    type Input = Resolved<IProductBulk.IBulkAssignCategories>;
    type Output = Primitive<IResponse<IProductBulk.IBulkResult>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/products/bulk-categories";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
