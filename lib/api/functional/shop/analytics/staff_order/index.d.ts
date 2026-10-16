import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAnalyticsPage } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-common.type";
import type { IAnalyticsStaff } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-staff.type";
import type { IQuery, IResponse } from "../../../../../libs/shared/src/types/common.type";
export declare function staffOrderByShift(connection: IConnection, query: staffOrderByShift.Query): Promise<staffOrderByShift.Output>;
export declare namespace staffOrderByShift {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IAnalyticsPage<IAnalyticsStaff.IStaffOrderByShiftItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/analytics/staff-order";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: staffOrderByShift.Query) => string;
}
