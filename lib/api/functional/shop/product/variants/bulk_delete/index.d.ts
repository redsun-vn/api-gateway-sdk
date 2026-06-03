import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IVariant } from "../../../../../../libs/shared/src/types/product-service/ivariant";
export declare function bulkDelete(connection: IConnection, input: bulkDelete.Input): Promise<bulkDelete.Output>;
export declare namespace bulkDelete {
    type Input = Resolved<IVariant.IReqBulkDeleteVariant>;
    type Output = Primitive<IResponse<IVariant.IBulkDeleteVariantResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/product/variants/bulk-delete";
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
