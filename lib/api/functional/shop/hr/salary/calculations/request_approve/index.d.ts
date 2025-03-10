import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ISalaryCalculation } from "../../../../../../../libs/shared/src/types/hr/salary/salary-calculation";
export declare function requestApprove(connection: IConnection, id: string): Promise<requestApprove.Output>;
export declare namespace requestApprove {
    type Output = Primitive<IResponse<ISalaryCalculation.IResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/hr/salary/calculations/:id/request-approve";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
