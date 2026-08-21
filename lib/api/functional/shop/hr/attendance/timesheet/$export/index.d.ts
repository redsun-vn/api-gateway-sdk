import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IAttendanceTimesheet } from "../../../../../../../libs/shared/src/types/hr/attendance/timesheet";
export declare function exportTimesheet(connection: IConnection, body: exportTimesheet.Input): Promise<exportTimesheet.Output>;
export declare namespace exportTimesheet {
    type Input = Resolved<IAttendanceTimesheet.IExportQuery>;
    type Output = Primitive<IResponse<IAttendanceTimesheet.IExportResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/attendance/timesheet/export";
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
