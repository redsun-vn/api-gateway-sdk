import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IShop } from "../../../../libs/shared/src/types/ishop";
export declare function createRegisterV2(connection: IConnection, data: createRegisterV2.Input): Promise<createRegisterV2.Output>;
export declare namespace createRegisterV2 {
    type Input = Resolved<IShop.ICreate>;
    type Output = Primitive<IResponse<IShop.IShopResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shops/register-v2";
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
