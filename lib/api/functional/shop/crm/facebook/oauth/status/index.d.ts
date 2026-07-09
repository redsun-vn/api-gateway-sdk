import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmFacebook } from "../../../../../../../libs/shared/src/types/crm-service/ifacebook";
export declare function getOAuthStatus(connection: IConnection): Promise<getOAuthStatus.Output>;
export declare namespace getOAuthStatus {
    type Output = Primitive<IResponse<ICrmFacebook.IFbOAuthStatusResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/facebook/oauth/status";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
