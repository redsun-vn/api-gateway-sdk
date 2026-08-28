import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ILeaveAccrual } from "../../../../../../libs/shared/src/types/hr/salary/leave-accrual";
export declare function sweep(connection: IConnection, body: sweep.Input): Promise<sweep.Output>;
export declare namespace sweep {
    type Input = Resolved<ILeaveAccrual.ISweepBody>;
    type Output = Primitive<IResponse<ILeaveAccrual.ISweepResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/salary/leave-accrual/sweep";
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
