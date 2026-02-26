import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IAiContent } from "../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function listBrandVoices(connection: IConnection): Promise<listBrandVoices.Output>;
export declare namespace listBrandVoices {
    type Output = Primitive<IResponse<Array<IAiContent.IBrandVoice>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ai/content/brand-voice";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
export declare function getBrandVoice(connection: IConnection, id: string): Promise<getBrandVoice.Output>;
export declare namespace getBrandVoice {
    type Output = Primitive<IResponse<null | IAiContent.IBrandVoice>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ai/content/brand-voice/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function createBrandVoice(connection: IConnection, data: createBrandVoice.Input): Promise<createBrandVoice.Output>;
export declare namespace createBrandVoice {
    type Input = Resolved<IAiContent.IBrandVoiceUpsertRequest>;
    type Output = Primitive<IResponse<IAiContent.IBrandVoice>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ai/content/brand-voice";
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
export declare function updateBrandVoice(connection: IConnection, id: string, data: updateBrandVoice.Input): Promise<updateBrandVoice.Output>;
export declare namespace updateBrandVoice {
    type Input = Resolved<IAiContent.IBrandVoiceUpsertRequest>;
    type Output = Primitive<IResponse<IAiContent.IBrandVoice>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/ai/content/brand-voice/:id";
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
export declare function deleteBrandVoice(connection: IConnection, id: string): Promise<deleteBrandVoice.Output>;
export declare namespace deleteBrandVoice {
    type Output = Primitive<IResponse<IAiContent.ISuccessResponse>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/ai/content/brand-voice/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
