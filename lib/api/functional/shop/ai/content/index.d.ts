import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiContent } from "../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export * as jobs from "./jobs";
export * as keyword_suggest from "./keyword_suggest";
export * as search from "./search";
export * as history from "./history";
export * as batch_generate from "./batch_generate";
export * as blog from "./blog";
export * as brand_voice from "./brand_voice";
export declare function generate(connection: IConnection, data: generate.Input): Promise<generate.Output>;
export declare namespace generate {
    type Input = Resolved<IAiContent.IGenerateRequest>;
    type Output = Primitive<IResponse<IAiContent.IJobCreatedResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ai/content/generate";
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
export declare function estimate(connection: IConnection, data: estimate.Input): Promise<estimate.Output>;
export declare namespace estimate {
    type Input = Resolved<IAiContent.IEstimateRequest>;
    type Output = Primitive<IResponse<IAiContent.IEstimateResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ai/content/estimate";
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
