import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ISocialChannel } from "../../../../../../../../libs/shared/src/types/ads-service/isocial-channel";
import type { IResponse } from "../../../../../../../../libs/shared/src/types/common.type";
export declare function oauthComplete(connection: IConnection, body: oauthComplete.Input): Promise<oauthComplete.Output>;
export declare namespace oauthComplete {
    type Input = Resolved<ISocialChannel.IOAuthComplete>;
    type Output = Primitive<IResponse<ISocialChannel.IOAuthCompleteResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/channels/oauth/complete";
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
