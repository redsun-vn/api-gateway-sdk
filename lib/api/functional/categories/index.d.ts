import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../libs/shared/src/types/common.type";
import type { ICategory } from "../../../libs/shared/src/types/product-service/icategory";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ICategory.IDetailResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/categories";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
