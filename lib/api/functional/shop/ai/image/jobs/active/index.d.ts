import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAiImage } from "../../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function getActiveJobs(connection: IConnection): Promise<getActiveJobs.Output>;
export declare namespace getActiveJobs {
    type Output = Primitive<IResponse<Array<IAiImage.IJobStatusResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ai/image/jobs/active";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
