import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ITreatmentVariantConfigResponse } from "../../../../../../libs/shared/src/types/product-service/itreatment-config";
export declare function findAllVariantConfigByProductId(connection: IConnection, productId: string): Promise<findAllVariantConfigByProductId.Output>;
export declare namespace findAllVariantConfigByProductId {
    type Output = Primitive<IResponse<Array<ITreatmentVariantConfigResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/treatment-configs/variant-configs/product/:productId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (productId: string) => string;
}
