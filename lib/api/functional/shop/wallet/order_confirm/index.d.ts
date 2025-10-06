import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IOrderWallet } from "../../../../../libs/shared/src/types/order-service/iorder-wallet.type";
export declare function confirmOrder(connection: IConnection, data: confirmOrder.Input): Promise<confirmOrder.Output>;
export declare namespace confirmOrder {
    type Input = Resolved<IOrderWallet.IWalletConfirmOrder>;
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/wallet/order-confirm";
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
