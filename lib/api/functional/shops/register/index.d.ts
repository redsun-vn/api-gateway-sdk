import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IShop } from "../../../../libs/shared/src/types/ishop";
export declare function createRegister(connection: IConnection, data: createRegister.Input): Promise<createRegister.Output>;
export declare namespace createRegister {
    type Input = Primitive<IShop.ICreate>;
    type Output = Primitive<IResponse<IShop.IShopResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shops/register";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
