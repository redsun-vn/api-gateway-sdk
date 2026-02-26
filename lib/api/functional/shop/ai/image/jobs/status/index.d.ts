import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IAiImage } from "../../../../../../../libs/shared/src/types/ai-generation/index";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function getJobStatus(connection: IConnection, id: string): Promise<getJobStatus.Output>;
export declare namespace getJobStatus {
    type Output = Primitive<IResponse<IAiImage.IJobStatusResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/ai/image/jobs/:id/status";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
