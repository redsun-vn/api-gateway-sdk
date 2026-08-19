import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IEmailTemplate } from "../../../../../libs/shared/src/types/notification/iemail-config.type";
export * as preview from "./preview";
export * as activate from "./activate";
export * as duplicate from "./duplicate";
export * as test_send from "./test_send";
export * as seed from "./seed";
export declare function listTemplates(connection: IConnection, query: listTemplates.Query): Promise<listTemplates.Output>;
export declare namespace listTemplates {
    type Query = Resolved<IEmailTemplate.IListQuery>;
    type Output = Primitive<IResponse<Array<IEmailTemplate.IResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/email/templates";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listTemplates.Query) => string;
}
export declare function getTemplate(connection: IConnection, id: number): Promise<getTemplate.Output>;
export declare namespace getTemplate {
    type Output = Primitive<IResponse<IEmailTemplate.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/email/templates/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
export declare function createTemplate(connection: IConnection, dto: createTemplate.Input): Promise<createTemplate.Output>;
export declare namespace createTemplate {
    type Input = Resolved<IEmailTemplate.ICreateRequest>;
    type Output = Primitive<IResponse<IEmailTemplate.IMutationResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/email/templates";
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
export declare function updateTemplate(connection: IConnection, id: number, dto: updateTemplate.Input): Promise<updateTemplate.Output>;
export declare namespace updateTemplate {
    type Input = Resolved<IEmailTemplate.IUpdateRequest>;
    type Output = Primitive<IResponse<IEmailTemplate.IMutationResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/email/templates/:id";
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
export declare function deleteTemplate(connection: IConnection, id: number): Promise<deleteTemplate.Output>;
export declare namespace deleteTemplate {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/email/templates/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number) => string;
}
