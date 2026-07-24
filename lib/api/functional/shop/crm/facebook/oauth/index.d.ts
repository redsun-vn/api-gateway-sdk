import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmFacebook } from "../../../../../../libs/shared/src/types/crm-service/ifacebook";
export * as start from "./start";
export * as status from "./status";
export * as pages from "./pages";
export declare function disconnectOAuth(connection: IConnection): Promise<disconnectOAuth.Output>;
export declare namespace disconnectOAuth {
    type Output = Primitive<IResponse<ICrmFacebook.IFbOAuthDisconnectResponse>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/crm/facebook/oauth";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
