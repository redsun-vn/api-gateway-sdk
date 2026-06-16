import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmAdmin } from "../../../../../../libs/shared/src/types/crm-service/iadmin";
export declare function jobStatus(connection: IConnection, jobId: string): Promise<jobStatus.Output>;
export declare namespace jobStatus {
    type Output = Primitive<IResponse<ICrmAdmin.IJobStatusResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/admin/jobs/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (jobId: string) => string;
}
