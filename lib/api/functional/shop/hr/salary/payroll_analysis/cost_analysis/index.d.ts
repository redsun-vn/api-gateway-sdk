import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ISalaryPayrollAnalysis } from "../../../../../../../libs/shared/src/types/hr/salary/salary-payroll-analysis";
export declare function findAllByCostAnalysis(connection: IConnection, query: findAllByCostAnalysis.Query): Promise<findAllByCostAnalysis.Output>;
export declare namespace findAllByCostAnalysis {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<ISalaryPayrollAnalysis.IResponseByCostAnalysis>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/payroll-analysis/cost-analysis";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllByCostAnalysis.Query) => string;
}
