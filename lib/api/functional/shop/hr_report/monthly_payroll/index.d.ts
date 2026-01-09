import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IHRReport } from "../../../../../libs/shared/src/types/shop-service/hr-report";
export declare function getMonthlyPayroll(connection: IConnection, query: getMonthlyPayroll.Query): Promise<getMonthlyPayroll.Output>;
export declare namespace getMonthlyPayroll {
    type Query = Resolved<Omit<IHRReport.IHRReportRequest, "shop_id">>;
    type Output = Primitive<IResponse<IHRReport.IMonthlyPayrollResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr-report/monthly-payroll";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getMonthlyPayroll.Query) => string;
}
