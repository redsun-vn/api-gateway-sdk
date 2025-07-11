import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IAttribute } from "../../../../libs/shared/src/types/product-service/iattribute";
export declare function findAllAttributeOptions(connection: IConnection, query: findAllAttributeOptions.Query): Promise<findAllAttributeOptions.Output>;
export declare namespace findAllAttributeOptions {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<Array<IAttribute.AttributeOptionsResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/products/attribute-options";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllAttributeOptions.Query) => string;
}
