import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAiContent } from "../../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function getJobStatus(connection: IConnection, id: string): Promise<getJobStatus.Output>;
export declare namespace getJobStatus {
    type Output = Primitive<IResponse<IAiContent.IJobStatusResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ai/content/jobs/:id/status";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
