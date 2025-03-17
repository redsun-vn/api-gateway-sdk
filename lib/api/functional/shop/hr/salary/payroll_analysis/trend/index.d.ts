import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ISalaryPayrollAnalysis } from "../../../../../../../libs/shared/src/types/hr/salary/salary-payroll-analysis";
export declare function findAllByTrend(connection: IConnection, query: findAllByTrend.Query): Promise<findAllByTrend.Output>;
export declare namespace findAllByTrend {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<ISalaryPayrollAnalysis.IResponseByTrend>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/payroll-analysis/trend";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllByTrend.Query) => string;
}
