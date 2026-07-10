import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IOmnichannel } from "../../../../../../libs/shared/src/types/omnichannel-service/omnichannel.type";
export declare function createOAuthState(connection: IConnection, opts: createOAuthState.Input): Promise<createOAuthState.Output>;
export declare namespace createOAuthState {
    type Input = Resolved<IOmnichannel.ICreateOAuthState>;
    type Output = Primitive<IResponse<IOmnichannel.ICreateOAuthStateResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/omnichannel/oauth/state";
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
