import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ILeaveLedger } from "../../../../../../../libs/shared/src/types/hr/salary/leave-ledger";
export declare function myBalance(connection: IConnection, query: myBalance.Query): Promise<myBalance.Output>;
export declare namespace myBalance {
    type Query = Resolved<ILeaveLedger.IMyBalanceQuery>;
    type Output = Primitive<IResponse<ILeaveLedger.IBalanceResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/leave-ledger/my-balance";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: myBalance.Query) => string;
}
