import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../../libs/shared/src/types/common.type";
import type { ICrmFacebook } from "../../../../../../../../libs/shared/src/types/crm-service/ifacebook";
export declare function connectManagedPages(connection: IConnection, body: connectManagedPages.Input): Promise<connectManagedPages.Output>;
export declare namespace connectManagedPages {
    type Input = Resolved<ICrmFacebook.IConnectManagedPagesRequest>;
    type Output = Primitive<IResponse<ICrmFacebook.IConnectManagedPagesResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/facebook/oauth/pages/connect";
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
