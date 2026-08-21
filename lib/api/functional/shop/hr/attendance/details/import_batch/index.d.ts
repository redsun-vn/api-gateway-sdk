import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IAttendanceDetail } from "../../../../../../../libs/shared/src/types/hr/attendance/detail";
export declare function importBatch(connection: IConnection, body: importBatch.Input): Promise<importBatch.Output>;
export declare namespace importBatch {
    type Input = Resolved<IAttendanceDetail.IImportBatchRequest>;
    type Output = Primitive<IResponse<IAttendanceDetail.IImportBatchResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/attendance/details/import-batch";
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
