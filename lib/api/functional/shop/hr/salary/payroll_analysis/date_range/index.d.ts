import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ISalaryPayrollAnalysis } from "../../../../../../../libs/shared/src/types/hr/salary/salary-payroll-analysis";
export declare function findAllByDateRange(connection: IConnection, query: findAllByDateRange.Query): Promise<findAllByDateRange.Output>;
export declare namespace findAllByDateRange {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<ISalaryPayrollAnalysis.IResponseByDateRange>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/payroll-analysis/date-range";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllByDateRange.Query) => string;
}
