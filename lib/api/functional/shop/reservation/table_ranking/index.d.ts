import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ITableHistory } from "../../../../../libs/shared/src/types/reservation-service/itable-history";
export declare function getRanking(connection: IConnection, filter: getRanking.Query): Promise<getRanking.Output>;
export declare namespace getRanking {
    type Query = Resolved<ITableHistory.IRankingFilter>;
    type Output = Primitive<IResponse<Array<ITableHistory.ITableRanking>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/table_ranking";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (filter: getRanking.Query) => string;
}
