import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IPlatformEmail } from "../../../../../libs/shared/src/types/admin-service/iplatform-email";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export * as publish from "./publish";
export declare function listTemplates(connection: IConnection, query: listTemplates.Query): Promise<listTemplates.Output>;
export declare namespace listTemplates {
    type Query = Resolved<IPlatformEmail.ITemplateListQuery>;
    type Output = Primitive<IResponse<Array<IPlatformEmail.ITemplate>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/platform-email/templates";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listTemplates.Query) => string;
}
export declare function createTemplate(connection: IConnection, body: createTemplate.Input): Promise<createTemplate.Output>;
export declare namespace createTemplate {
    type Input = Resolved<IPlatformEmail.ITemplateCreate>;
    type Output = Primitive<IResponse<IPlatformEmail.ITemplate>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/platform-email/templates";
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
export declare function updateTemplate(connection: IConnection, id: string, body: updateTemplate.Input): Promise<updateTemplate.Output>;
export declare namespace updateTemplate {
    type Input = Resolved<Partial<IPlatformEmail.ITemplateCreate>>;
    type Output = Primitive<IResponse<IPlatformEmail.ITemplate>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/admin/platform-email/templates/:id";
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
    const path: (id: string) => string;
}
export declare function deleteTemplate(connection: IConnection, id: string): Promise<deleteTemplate.Output>;
export declare namespace deleteTemplate {
    type Output = Primitive<IResponse<IPlatformEmail.IDeleteResult>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/admin/platform-email/templates/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
