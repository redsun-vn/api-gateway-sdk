import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmFacebook } from "../../../../../../libs/shared/src/types/crm-service/ifacebook";
export * as token from "./token";
export * as forms from "./forms";
export declare function listPages(connection: IConnection): Promise<listPages.Output>;
export declare namespace listPages {
    type Output = Primitive<IResponse<Array<ICrmFacebook.IFbPageConfigResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/facebook/pages";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function connectPage(connection: IConnection, body: connectPage.Input): Promise<connectPage.Output>;
export declare namespace connectPage {
    type Input = Resolved<ICrmFacebook.IConnectPageRequest>;
    type Output = Primitive<IResponse<ICrmFacebook.IFbPageConfigResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/facebook/pages";
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
export declare function disconnectPage(connection: IConnection, id: number): Promise<disconnectPage.Output>;
export declare namespace disconnectPage {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/crm/facebook/pages/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
