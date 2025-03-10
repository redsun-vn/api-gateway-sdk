import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ISalaryCalculation } from "../../../../../../../libs/shared/src/types/hr/salary/salary-calculation";
export declare function createManual(connection: IConnection, data: createManual.Input): Promise<createManual.Output>;
export declare namespace createManual {
    type Input = Resolved<ISalaryCalculation.IManualCreate>;
    type Output = Primitive<IResponse<ISalaryCalculation.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/salary/calculations/manual";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
