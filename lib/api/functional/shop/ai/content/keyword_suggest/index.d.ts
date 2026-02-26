import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiContent } from "../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function suggestKeywords(connection: IConnection, data: suggestKeywords.Input): Promise<suggestKeywords.Output>;
export declare namespace suggestKeywords {
    type Input = Resolved<IAiContent.IKeywordSuggestRequest>;
    type Output = Primitive<IResponse<IAiContent.IKeywordSuggestResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/ai/content/keyword-suggest";
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
