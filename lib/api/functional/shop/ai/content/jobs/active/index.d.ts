import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAiContent } from "../../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function getActiveJobs(connection: IConnection): Promise<getActiveJobs.Output>;
export declare namespace getActiveJobs {
    type Output = Primitive<IResponse<Array<IAiContent.IJobStatusResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ai/content/jobs/active";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
