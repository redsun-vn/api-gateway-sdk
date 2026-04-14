import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function getProductMappingsByLocalId(connection: IConnection, localProductId: string): Promise<getProductMappingsByLocalId.Output>;
export declare namespace getProductMappingsByLocalId {
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/omnichannel/products/mapping/by-product/:localProductId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (localProductId: string) => string;
}
