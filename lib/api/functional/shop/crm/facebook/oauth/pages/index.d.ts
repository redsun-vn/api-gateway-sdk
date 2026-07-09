import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmFacebook } from "../../../../../../../libs/shared/src/types/crm-service/ifacebook";
export * as connect from "./connect";
export declare function listManagedPages(connection: IConnection): Promise<listManagedPages.Output>;
export declare namespace listManagedPages {
    type Output = Primitive<IResponse<Array<ICrmFacebook.IFbManagedPage>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/facebook/oauth/pages";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
