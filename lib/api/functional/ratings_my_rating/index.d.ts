import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IRating } from "../../../libs/shared/src/types/comment-service/irating.type";
import type { IResponse } from "../../../libs/shared/src/types/common.type";
export declare function getMyRating(connection: IConnection, query: getMyRating.Query): Promise<getMyRating.Output>;
export declare namespace getMyRating {
    type Query = Resolved<IRating.IQueryMyRating>;
    type Output = Primitive<IResponse<null | IRating.IRatingResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/ratings-my-rating";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getMyRating.Query) => string;
}
