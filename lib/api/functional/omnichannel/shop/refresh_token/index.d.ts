import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IOmnichannel } from "../../../../../libs/shared/src/types/omnichannel-service/omnichannel.type";
export declare function refreshTokenForProvider(connection: IConnection, opts: refreshTokenForProvider.Input): Promise<refreshTokenForProvider.Output>;
export declare namespace refreshTokenForProvider {
    type Input = Resolved<IOmnichannel.IRefreshTokenForProvider>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/omnichannel/shop/refresh-token";
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
