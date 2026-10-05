import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IProductBulk } from "../../../../../libs/shared/src/types/product-service/iproduct-bulk";
export declare function bulkAssignSalesChannels(connection: IConnection, input: bulkAssignSalesChannels.Input): Promise<bulkAssignSalesChannels.Output>;
export declare namespace bulkAssignSalesChannels {
    type Input = Resolved<IProductBulk.IBulkAssignSalesChannels>;
    type Output = Primitive<IResponse<IProductBulk.IBulkResult>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/products/bulk-sales-channels";
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
