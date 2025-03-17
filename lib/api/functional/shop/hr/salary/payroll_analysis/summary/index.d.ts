import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ISalaryPayrollAnalysis } from "../../../../../../../libs/shared/src/types/hr/salary/salary-payroll-analysis";
export declare function findAllBySummary(connection: IConnection, query: findAllBySummary.Query): Promise<findAllBySummary.Output>;
export declare namespace findAllBySummary {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<ISalaryPayrollAnalysis.IResponseBySummary>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/payroll-analysis/summary";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllBySummary.Query) => string;
}
