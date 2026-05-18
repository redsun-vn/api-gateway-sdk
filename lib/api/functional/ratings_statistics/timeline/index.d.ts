import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IRating } from "../../../../libs/shared/src/types/comment-service/irating.type";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function getPublicTimeline(connection: IConnection, query: getPublicTimeline.Query): Promise<getPublicTimeline.Output>;
export declare namespace getPublicTimeline {
    type Query = Resolved<IRating.IQueryTimeline>;
    type Output = Primitive<IResponse<IRating.IRatingTimeline>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/ratings-statistics/timeline";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getPublicTimeline.Query) => string;
}
