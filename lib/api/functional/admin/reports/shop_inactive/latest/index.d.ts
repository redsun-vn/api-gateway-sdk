import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function getShopLastedActive(connection: IConnection, shopId: number): Promise<getShopLastedActive.Output>;
export declare namespace getShopLastedActive {
    type Output = Primitive<IResponse<string>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/reports/shop-inactive/:shop_id/latest";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (shopId: number) => string;
}
