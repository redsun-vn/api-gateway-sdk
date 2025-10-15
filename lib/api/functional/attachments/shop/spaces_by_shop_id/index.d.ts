import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISpace } from "../../../../../libs/shared/src/types/ifile";
export declare function findOneSpaceByShopId(connection: IConnection): Promise<findOneSpaceByShopId.Output>;
export declare namespace findOneSpaceByShopId {
    type Output = Primitive<IResponse<ISpace.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/attachments/shop/spaces-by-shop-id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
