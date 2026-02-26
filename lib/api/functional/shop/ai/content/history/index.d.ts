import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiContent, IAiPaginationResult } from "../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function getHistory(connection: IConnection, query: getHistory.Query): Promise<getHistory.Output>;
export declare namespace getHistory {
    type Query = Resolved<IAiContent.IHistoryQuery>;
    type Output = Primitive<IResponse<IAiPaginationResult<IAiContent.IContentJob>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ai/content/history";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getHistory.Query) => string;
}
export declare function getHistoryDetail(connection: IConnection, id: string): Promise<getHistoryDetail.Output>;
export declare namespace getHistoryDetail {
    type Output = Primitive<IResponse<IAiContent.IContentJob>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ai/content/history/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
