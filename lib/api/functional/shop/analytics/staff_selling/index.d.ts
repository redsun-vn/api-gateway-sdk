import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IAnalyticsPage } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-common.type";
import type { IAnalyticsStaff } from "../../../../../libs/shared/src/types/analytics-service/ianalytics-staff.type";
import type { IQuery, IResponse } from "../../../../../libs/shared/src/types/common.type";
export * as $export from "./$export";
export declare function staffSelling(connection: IConnection, query: staffSelling.Query): Promise<staffSelling.Output>;
export declare namespace staffSelling {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IAnalyticsPage<IAnalyticsStaff.IStaffSellingItem>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/analytics/staff-selling";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: staffSelling.Query) => string;
}
