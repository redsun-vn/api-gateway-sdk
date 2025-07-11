import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IAttribute } from "../../../../libs/shared/src/types/product-service/iattribute";
export declare function findAllAttributeOptions(connection: IConnection, shopId: string): Promise<findAllAttributeOptions.Output>;
export declare namespace findAllAttributeOptions {
    type Output = Primitive<IResponse<Array<IAttribute.AttributeOptionsResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/products/:shopId/attribute-options";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (shopId: string) => string;
}
