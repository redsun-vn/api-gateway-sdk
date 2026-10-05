import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IProductBulk } from "../../../../../libs/shared/src/types/product-service/iproduct-bulk";
export declare function bulkUpdateStatus(connection: IConnection, input: bulkUpdateStatus.Input): Promise<bulkUpdateStatus.Output>;
export declare namespace bulkUpdateStatus {
    type Input = Resolved<IProductBulk.IBulkUpdateStatus>;
    type Output = Primitive<IResponse<IProductBulk.IBulkResult>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/products/bulk-status";
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
