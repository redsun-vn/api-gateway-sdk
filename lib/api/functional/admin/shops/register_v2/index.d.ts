import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IShop } from "../../../../../libs/shared/src/types/ishop";
export declare function createFromAdminRegisterV2(connection: IConnection, data: createFromAdminRegisterV2.Input): Promise<createFromAdminRegisterV2.Output>;
export declare namespace createFromAdminRegisterV2 {
    type Input = Resolved<IShop.IAdminCreateRegisterV2>;
    type Output = Primitive<IResponse<IShop.IAdminCreateRegisterV2Response>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/shops/register-v2";
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
