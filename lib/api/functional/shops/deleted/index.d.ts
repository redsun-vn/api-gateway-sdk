import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IShop } from "../../../../libs/shared/src/types/ishop";
export declare function findAllWithDeleted(connection: IConnection): Promise<findAllWithDeleted.Output>;
export declare namespace findAllWithDeleted {
    type Output = Primitive<IResponse<Array<IShop.IShopResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shops/deleted";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
