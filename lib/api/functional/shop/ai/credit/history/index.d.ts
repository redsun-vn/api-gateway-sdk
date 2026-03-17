import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiCredit, IAiPaginationResult } from "../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function getHistory(connection: IConnection, query: getHistory.Query): Promise<getHistory.Output>;
export declare namespace getHistory {
    type Query = Resolved<IAiCredit.IHistoryQuery>;
    type Output = Primitive<IResponse<IAiPaginationResult<IAiCredit.ICreditHistoryResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ai/credit/history";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getHistory.Query) => string;
}
