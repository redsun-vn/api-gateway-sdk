import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { IAttendanceTimesheet } from "../../../../../../../libs/shared/src/types/hr/attendance/timesheet";
export declare function myTimesheet(connection: IConnection, body: myTimesheet.Input): Promise<myTimesheet.Output>;
export declare namespace myTimesheet {
    type Input = Resolved<IAttendanceTimesheet.IMyTimesheetQuery>;
    type Output = Primitive<IResponse<IAttendanceTimesheet.IMyTimesheetResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/attendance/timesheet/me";
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
