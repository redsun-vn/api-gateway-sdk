import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IProductBulk } from "../../../../../libs/shared/src/types/product-service/iproduct-bulk";
export declare function bulkDelete(connection: IConnection, input: bulkDelete.Input): Promise<bulkDelete.Output>;
export declare namespace bulkDelete {
    type Input = Resolved<IProductBulk.IBulkDelete>;
    type Output = Primitive<IResponse<IProductBulk.IBulkResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/products/bulk-delete";
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
