import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ITreatmentConfig } from "../../../../../libs/shared/src/types/product-service/itreatment-config";
export declare function findOneByProduct(connection: IConnection, productId: string): Promise<findOneByProduct.Output>;
export declare namespace findOneByProduct {
    type Output = Primitive<IResponse<ITreatmentConfig.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/treatment-configs/product/:productId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (productId: string) => string;
}
