import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmFacebook } from "../../../../../../../libs/shared/src/types/crm-service/ifacebook";
export declare function startOAuth(connection: IConnection, query: startOAuth.Query): Promise<startOAuth.Output>;
export declare namespace startOAuth {
    type Query = Resolved<ICrmFacebook.IFbStartOAuthQuery>;
    type Output = Primitive<IResponse<ICrmFacebook.IFbStartOAuthResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/facebook/oauth/start";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: startOAuth.Query) => string;
}
