import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ILeaveLedger } from "../../../../../../../libs/shared/src/types/hr/salary/leave-ledger";
export declare function negativeBalance(connection: IConnection, query: negativeBalance.Query): Promise<negativeBalance.Output>;
export declare namespace negativeBalance {
    type Query = Resolved<ILeaveLedger.INegativeBalanceQuery>;
    type Output = Primitive<IResponse<ILeaveLedger.INegativeBalanceResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/leave-adjustment/negative-balance";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: negativeBalance.Query) => string;
}
