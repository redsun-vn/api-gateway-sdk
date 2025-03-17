import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ISalaryPayrollAnalysis } from "../../../../../../../libs/shared/src/types/hr/salary/salary-payroll-analysis";
export declare function findAllByDepartment(connection: IConnection, query: findAllByDepartment.Query): Promise<findAllByDepartment.Output>;
export declare namespace findAllByDepartment {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<ISalaryPayrollAnalysis.IResponseByDepartment>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/payroll-analysis/department";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAllByDepartment.Query) => string;
}
