import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiContent, IAiPaginationResult } from "../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function searchHistory(connection: IConnection, query: searchHistory.Query): Promise<searchHistory.Output>;
export declare namespace searchHistory {
    type Query = Resolved<IAiContent.ISearchHistoryQuery>;
    type Output = Primitive<IResponse<IAiPaginationResult<IAiContent.IContentJob>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ai/content/search";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: searchHistory.Query) => string;
}
