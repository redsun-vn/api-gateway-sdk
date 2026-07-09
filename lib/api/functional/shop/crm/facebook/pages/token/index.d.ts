import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmFacebook } from "../../../../../../../libs/shared/src/types/crm-service/ifacebook";
export declare function updatePageToken(connection: IConnection, id: number, body: updatePageToken.Input): Promise<updatePageToken.Output>;
export declare namespace updatePageToken {
    type Input = Resolved<ICrmFacebook.IUpdatePageTokenRequest>;
    type Output = Primitive<IResponse<ICrmFacebook.IFbPageConfigResponse>>;
    const METADATA: {
        readonly method: "PATCH";
        readonly path: "/shop/crm/facebook/pages/:id/token";
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
    const path: (id: number) => string;
}
