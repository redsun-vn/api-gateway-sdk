import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ILeaveLedger } from "../../../../../../libs/shared/src/types/hr/salary/leave-ledger";
export * as negative_balance from "./negative_balance";
export declare function createAdjustment(connection: IConnection, body: createAdjustment.Input): Promise<createAdjustment.Output>;
export declare namespace createAdjustment {
    type Input = Resolved<ILeaveLedger.IAdjustmentBody>;
    type Output = Primitive<IResponse<ILeaveLedger.IAdjustmentResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/salary/leave-adjustment";
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
