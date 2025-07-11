import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../libs/shared/src/types/common.type";
import type { IProduct } from "../../../libs/shared/src/types/product-service/iproduct";
export * as attributes from "./attributes";
export * as attribute_options from "./attribute_options";
export * as product_brands from "./product_brands";
export * as comments from "./comments";
export * as tags from "./tags";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IProduct.IProductResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/products";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
