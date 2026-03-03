import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ITreatmentProductItem } from "../../../../../libs/shared/src/types/product-service/itreatment-product-item";
export declare function findByConfig(connection: IConnection, configId: string): Promise<findByConfig.Output>;
export declare namespace findByConfig {
    type Output = Primitive<IResponse<Array<ITreatmentProductItem.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/treatment-configs/:configId/product-items";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (configId: string) => string;
}
export declare function create(connection: IConnection, configId: string, input: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<ITreatmentProductItem.ICreateRequest>;
    type Output = Primitive<IResponse<ITreatmentProductItem.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/treatment-configs/:configId/product-items";
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
    const path: (configId: string) => string;
}
export declare function update(connection: IConnection, id: string, configId: string, input: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<ITreatmentProductItem.IUpdate>;
    type Output = Primitive<IResponse<ITreatmentProductItem.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/treatment-configs/:configId/product-items/:id";
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
    const path: (id: string, configId: string) => string;
}
export declare function $delete(connection: IConnection, id: string, configId: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/treatment-configs/:configId/product-items/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string, configId: string) => string;
}
