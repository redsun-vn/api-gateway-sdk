import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiContent } from "../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function batchGenerate(connection: IConnection, data: batchGenerate.Input): Promise<batchGenerate.Output>;
export declare namespace batchGenerate {
    type Input = Resolved<IAiContent.IBatchGenerateRequest>;
    type Output = Primitive<IResponse<IAiContent.IBatchGenerateResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ai/content/batch-generate";
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
