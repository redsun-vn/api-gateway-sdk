import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IProductOption } from "../../../../../libs/shared/src/types/product-service/iproduct-option";
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IProductOption.IDetailProductOptionResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/product/product-options/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function create(connection: IConnection, input: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IProductOption.ICreateProductOption>;
    type Output = Primitive<IResponse<IProductOption.IDetailProductOptionResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/product/product-options";
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
    type Input = Resolved<IProductOption.IUpdateProductOption>;
    type Output = Primitive<IResponse<IProductOption.IDetailProductOptionResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/product/product-options/:id";
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
        readonly path: "/shop/product/product-options/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
