import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IRatingCriteriaTemplate } from "../../../../libs/shared/src/types/comment-service/irating-criteria-template.type";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
export declare function bulkCreate(connection: IConnection, data: bulkCreate.Input): Promise<bulkCreate.Output>;
export declare namespace bulkCreate {
    type Input = Resolved<IRatingCriteriaTemplate.IBulkCreate>;
    type Output = Primitive<IResponse<Array<IRatingCriteriaTemplate.IResponse>>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/rating-criteria-templates-bulk";
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
