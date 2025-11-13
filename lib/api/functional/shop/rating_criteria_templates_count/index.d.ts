import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IRatingCriteriaTemplate } from "../../../../libs/shared/src/types/comment-service/irating-criteria-template.type";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function count(connection: IConnection, query: count.Query): Promise<count.Output>;
export declare namespace count {
    type Query = Resolved<IRatingCriteriaTemplate.IQueryTemplateCount>;
    type Output = Primitive<IResponse<number>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/rating-criteria-templates-count";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: count.Query) => string;
}
