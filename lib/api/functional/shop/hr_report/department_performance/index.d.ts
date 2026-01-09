import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IHRReport } from "../../../../../libs/shared/src/types/shop-service/hr-report";
export declare function getDepartmentPerformance(connection: IConnection, query: getDepartmentPerformance.Query): Promise<getDepartmentPerformance.Output>;
export declare namespace getDepartmentPerformance {
    type Query = Resolved<Omit<IHRReport.IHRReportRequest, "shop_id">>;
    type Output = Primitive<IResponse<IHRReport.IDepartmentPerformanceResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr-report/department-performance";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getDepartmentPerformance.Query) => string;
}
