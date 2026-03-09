import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { ITreatmentConfig } from "../../../../libs/shared/src/types/product-service/itreatment-config";
export * as product from "./product";
export * as variant_config from "./variant_config";
export * as variant_configs from "./variant_configs";
export * as product_items from "./product_items";
export declare function create(connection: IConnection, input: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ITreatmentConfig.ICreate>;
    type Output = Primitive<IResponse<ITreatmentConfig.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/treatment-configs";
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
export declare function update(connection: IConnection, id: string, input: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<ITreatmentConfig.IUpdate>;
    type Output = Primitive<IResponse<ITreatmentConfig.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/treatment-configs/:id";
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
    const path: (id: string) => string;
}
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/treatment-configs/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
