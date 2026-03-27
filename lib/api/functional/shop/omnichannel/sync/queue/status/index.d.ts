import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function getQueueStatus(connection: IConnection, jobId: string): Promise<getQueueStatus.Output>;
export declare namespace getQueueStatus {
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/omnichannel/sync/queue/status/:jobId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (jobId: string) => string;
}
