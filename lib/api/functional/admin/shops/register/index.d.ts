import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IShop } from "../../../../../libs/shared/src/types/ishop";
export declare function createFromAdminRegister(connection: IConnection, data: createFromAdminRegister.Input): Promise<createFromAdminRegister.Output>;
export declare namespace createFromAdminRegister {
    type Input = Resolved<IShop.ICreate>;
    type Output = Primitive<IResponse<IShop.IShopResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/shops/register";
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
