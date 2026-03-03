import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ITreatmentVariantConfigInput, ITreatmentVariantConfigResponse } from "../../../../../libs/shared/src/types/product-service/itreatment-config";
export declare function upsertVariantConfig(connection: IConnection, input: upsertVariantConfig.Input): Promise<upsertVariantConfig.Output>;
export declare namespace upsertVariantConfig {
    type Input = Resolved<ITreatmentVariantConfigInput>;
    type Output = Primitive<IResponse<ITreatmentVariantConfigResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/treatment-configs/variant-config";
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
