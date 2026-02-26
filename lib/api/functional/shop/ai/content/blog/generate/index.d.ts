import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiContent } from "../../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function generateBlog(connection: IConnection, data: generateBlog.Input): Promise<generateBlog.Output>;
export declare namespace generateBlog {
    type Input = Resolved<IAiContent.IBlogGenerateRequest>;
    type Output = Primitive<IResponse<IAiContent.IJobCreatedResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ai/content/blog/generate";
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
