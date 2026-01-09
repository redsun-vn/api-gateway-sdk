import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IHRReport } from "../../../../../libs/shared/src/types/shop-service/hr-report";
export declare function getDailyAttendance(connection: IConnection, query: getDailyAttendance.Query): Promise<getDailyAttendance.Output>;
export declare namespace getDailyAttendance {
    type Query = Resolved<Omit<IHRReport.IDateRangeRequest, "shop_id">>;
    type Output = Primitive<IResponse<IHRReport.IDailyAttendanceResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr-report/daily-attendance";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getDailyAttendance.Query) => string;
}
