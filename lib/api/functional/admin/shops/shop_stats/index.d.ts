import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IShop } from "../../../../../libs/shared/src/types/ishop";
export declare function stats(connection: IConnection): Promise<stats.Output>;
export declare namespace stats {
    type Output = Primitive<IResponse<IShop.IStats>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/shops/shop_stats";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
