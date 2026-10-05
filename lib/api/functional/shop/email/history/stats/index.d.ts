import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IEmailHistory } from "../../../../../../libs/shared/src/types/notification/iemail-config.type";
export declare function statsHistoryByAction(connection: IConnection, query: statsHistoryByAction.Query): Promise<statsHistoryByAction.Output>;
export declare namespace statsHistoryByAction {
    type Query = Resolved<IEmailHistory.IActionStatsQuery>;
    type Output = Primitive<IResponse<IEmailHistory.IActionStatsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/email/history/stats";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: statsHistoryByAction.Query) => string;
}
