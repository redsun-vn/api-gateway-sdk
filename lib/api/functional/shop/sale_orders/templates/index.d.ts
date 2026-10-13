import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISaleOrderTemplate } from "../../../../../libs/shared/src/types/order-service/isale-order-template";
export * as $default from "./$default";
export declare function listTemplates(connection: IConnection, query: listTemplates.Query): Promise<listTemplates.Output>;
export declare namespace listTemplates {
    type Query = Resolved<ISaleOrderTemplate.IListQuery>;
    type Output = Primitive<IResponse<ISaleOrderTemplate.IListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/sale-orders/templates";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listTemplates.Query) => string;
}
export declare function findOneTemplate(connection: IConnection, templateId: string): Promise<findOneTemplate.Output>;
export declare namespace findOneTemplate {
    type Output = Primitive<IResponse<ISaleOrderTemplate.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/sale-orders/templates/:templateId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (templateId: string) => string;
}
export declare function createTemplate(connection: IConnection, body: createTemplate.Input): Promise<createTemplate.Output>;
export declare namespace createTemplate {
    type Input = Resolved<ISaleOrderTemplate.ICreateBody>;
    type Output = Primitive<IResponse<ISaleOrderTemplate.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/sale-orders/templates";
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
export declare function updateTemplate(connection: IConnection, templateId: string, body: updateTemplate.Input): Promise<updateTemplate.Output>;
export declare namespace updateTemplate {
    type Input = Resolved<ISaleOrderTemplate.IUpdateBody>;
    type Output = Primitive<IResponse<ISaleOrderTemplate.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/sale-orders/templates/:templateId";
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
    const path: (templateId: string) => string;
}
export declare function deleteTemplate(connection: IConnection, templateId: string): Promise<deleteTemplate.Output>;
export declare namespace deleteTemplate {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/sale-orders/templates/:templateId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (templateId: string) => string;
}
