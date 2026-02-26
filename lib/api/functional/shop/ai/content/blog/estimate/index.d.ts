import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiContent } from "../../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function estimateBlog(connection: IConnection, data: estimateBlog.Input): Promise<estimateBlog.Output>;
export declare namespace estimateBlog {
    type Input = Resolved<IAiContent.IBlogEstimateRequest>;
    type Output = Primitive<IResponse<IAiContent.IBlogEstimateResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ai/content/blog/estimate";
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
