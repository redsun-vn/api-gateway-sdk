import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAdsConnection } from "../../../../../../../../libs/shared/src/types/ads-service/iads-connection";
import type { IResponse } from "../../../../../../../../libs/shared/src/types/common.type";
export declare function oauthStart(connection: IConnection, platform: string, query: oauthStart.Query): Promise<oauthStart.Output>;
export declare namespace oauthStart {
    type Query = Resolved<IAdsConnection.IOAuthStartQuery>;
    type Output = Primitive<IResponse<IAdsConnection.IOAuthStartResult>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/ads/connections/:platform/oauth/start";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (platform: string, query: oauthStart.Query) => string;
}
