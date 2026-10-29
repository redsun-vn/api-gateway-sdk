import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAdsConnection } from "../../../../../../../libs/shared/src/types/ads-service/iads-connection";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function updateAccounts(connection: IConnection, id: string, body: updateAccounts.Input): Promise<updateAccounts.Output>;
export declare namespace updateAccounts {
    type Input = Resolved<IAdsConnection.IAccountsUpdate>;
    type Output = Primitive<IResponse<IAdsConnection.IView>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/mkt-os/ads/connections/:id/accounts";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
