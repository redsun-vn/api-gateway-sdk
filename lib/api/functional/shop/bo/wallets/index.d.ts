import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IWallet } from "../../../../../libs/shared/src/types/loyalty-service/iwallet";
export declare function createFromBoShop(connection: IConnection, data: createFromBoShop.Input): Promise<createFromBoShop.Output>;
export declare namespace createFromBoShop {
    type Input = Resolved<IWallet.ICreateFromAdminShop>;
    type Output = Primitive<IResponse<IWallet.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/bo/wallets";
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
