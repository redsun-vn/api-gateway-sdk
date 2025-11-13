import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IRating } from "../../../libs/shared/src/types/comment-service/irating.type";
import type { IResponse } from "../../../libs/shared/src/types/common.type";
export declare function getPublicStatistics(connection: IConnection, query: getPublicStatistics.Query): Promise<getPublicStatistics.Output>;
export declare namespace getPublicStatistics {
    type Query = Resolved<IRating.IQueryStatistics>;
    type Output = Primitive<IResponse<IRating.IRatingStatistics>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/ratings-statistics";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getPublicStatistics.Query) => string;
}
