import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IOmnichannel } from "../../../../../libs/shared/src/types/omnichannel-service/omnichannel.type";
export declare function authorizeToken(connection: IConnection, opts: authorizeToken.Input): Promise<authorizeToken.Output>;
export declare namespace authorizeToken {
    type Input = Resolved<IOmnichannel.IAuthorizeToken>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/omnichannel/shop/authorize";
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
