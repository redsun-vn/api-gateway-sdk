import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmPipeline } from "../../../../../../libs/shared/src/types/crm-service/ipipeline";
export declare function bantRubricUpdate(connection: IConnection, body: bantRubricUpdate.Input): Promise<bantRubricUpdate.Output>;
export declare namespace bantRubricUpdate {
    type Input = Resolved<ICrmPipeline.IBantRubricUpdateBody>;
    type Output = Primitive<IResponse<ICrmPipeline.IBantRubricResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/pipelines/bant-rubric";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
