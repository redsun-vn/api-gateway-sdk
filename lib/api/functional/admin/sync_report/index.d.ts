import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { AdminSYncReport } from "../../../../libs/shared/src/types/report-service/index";
export declare function syncReport(connection: IConnection, data: syncReport.Input): Promise<syncReport.Output>;
export declare namespace syncReport {
    type Input = Resolved<AdminSYncReport>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/admin/sync-report";
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
