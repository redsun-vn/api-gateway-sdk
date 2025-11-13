import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IRating } from "../../../../../libs/shared/src/types/comment-service/irating.type";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function getStatistics(connection: IConnection, query: getStatistics.Query): Promise<getStatistics.Output>;
export declare namespace getStatistics {
    type Query = Resolved<IRating.IQueryShop>;
    type Output = Primitive<IResponse<IRating.IRatingStatistics>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ratings/statistics";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getStatistics.Query) => string;
}
