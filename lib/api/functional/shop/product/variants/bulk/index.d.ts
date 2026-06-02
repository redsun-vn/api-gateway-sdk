import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IVariant } from "../../../../../../libs/shared/src/types/product-service/ivariant";
export declare function bulkCreate(connection: IConnection, input: bulkCreate.Input): Promise<bulkCreate.Output>;
export declare namespace bulkCreate {
    type Input = Resolved<IVariant.IReqBulkCreateVariant>;
    type Output = Primitive<IResponse<IVariant.IBulkCreateVariantResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/product/variants/bulk";
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
export declare function bulkUpdate(connection: IConnection, input: bulkUpdate.Input): Promise<bulkUpdate.Output>;
export declare namespace bulkUpdate {
    type Input = Resolved<IVariant.IReqBulkUpdateVariant>;
    type Output = Primitive<IResponse<IVariant.IBulkUpdateVariantResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/product/variants/bulk";
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
