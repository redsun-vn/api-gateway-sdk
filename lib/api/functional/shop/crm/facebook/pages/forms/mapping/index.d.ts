import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../../libs/shared/src/types/common.type";
import type { ICrmFacebook } from "../../../../../../../../libs/shared/src/types/crm-service/ifacebook";
export declare function saveMapping(connection: IConnection, id: number, formId: string, body: saveMapping.Input): Promise<saveMapping.Output>;
export declare namespace saveMapping {
    type Input = Resolved<ICrmFacebook.ISaveMappingRequest>;
    type Output = Primitive<IResponse<ICrmFacebook.IFbFormMappingResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/facebook/pages/:id/forms/:formId/mapping";
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
    const path: (id: number, formId: string) => string;
}
export declare function getMapping(connection: IConnection, id: number, formId: string): Promise<getMapping.Output>;
export declare namespace getMapping {
    type Output = Primitive<IResponse<ICrmFacebook.IFbFormMappingResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/facebook/pages/:id/forms/:formId/mapping";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: number, formId: string) => string;
}
