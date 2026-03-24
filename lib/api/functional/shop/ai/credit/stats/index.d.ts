import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAiCredit } from "../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function getStats(connection: IConnection, query: getStats.Query): Promise<getStats.Output>;
export declare namespace getStats {
    type Query = Resolved<IAiCredit.IStatsQuery>;
    type Output = Primitive<IResponse<IAiCredit.IStatsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ai/credit/stats";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getStats.Query) => string;
}
