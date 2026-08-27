import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ILeaveLedger } from "../../../../../../../libs/shared/src/types/hr/salary/leave-ledger";
export declare function balanceBulk(connection: IConnection, body: balanceBulk.Input): Promise<balanceBulk.Output>;
export declare namespace balanceBulk {
    type Input = Resolved<ILeaveLedger.IBalanceBulkBody>;
    type Output = Primitive<IResponse<ILeaveLedger.IBalanceResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/hr/salary/leave-ledger/balance-bulk";
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
