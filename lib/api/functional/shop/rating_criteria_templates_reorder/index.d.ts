import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IRatingCriteriaTemplate } from "../../../../libs/shared/src/types/comment-service/irating-criteria-template.type";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function reorder(connection: IConnection, data: reorder.Input): Promise<reorder.Output>;
export declare namespace reorder {
    type Input = Resolved<IRatingCriteriaTemplate.IReorderRequest>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/rating-criteria-templates-reorder";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
