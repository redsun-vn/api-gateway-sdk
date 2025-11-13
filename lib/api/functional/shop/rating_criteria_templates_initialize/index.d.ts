import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IRatingCriteriaTemplate } from "../../../../libs/shared/src/types/comment-service/irating-criteria-template.type";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function initialize(connection: IConnection, data: initialize.Input): Promise<initialize.Output>;
export declare namespace initialize {
    type Input = Resolved<IRatingCriteriaTemplate.IResetRequest>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/rating-criteria-templates-initialize";
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
