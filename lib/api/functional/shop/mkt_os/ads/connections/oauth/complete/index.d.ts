import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAdsConnection } from "../../../../../../../../libs/shared/src/types/ads-service/iads-connection";
import type { IResponse } from "../../../../../../../../libs/shared/src/types/common.type";
export declare function oauthComplete(connection: IConnection, body: oauthComplete.Input): Promise<oauthComplete.Output>;
export declare namespace oauthComplete {
    type Input = Resolved<IAdsConnection.IOAuthComplete>;
    type Output = Primitive<IResponse<IAdsConnection.IView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/ads/connections/oauth/complete";
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
