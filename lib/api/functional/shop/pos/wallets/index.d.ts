import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IWallet } from "../../../../../libs/shared/src/types/loyalty-service/iwallet";
export declare function createFromPOSShop(connection: IConnection, data: createFromPOSShop.Input): Promise<createFromPOSShop.Output>;
export declare namespace createFromPOSShop {
    type Input = Resolved<IWallet.ICreateFromPOSShop>;
    type Output = Primitive<IResponse<IWallet.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/pos/wallets";
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
