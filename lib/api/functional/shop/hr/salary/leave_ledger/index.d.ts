import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ILeaveLedger } from "../../../../../../libs/shared/src/types/hr/salary/leave-ledger";
export * as my_ledger from "./my_ledger";
export * as my_balance from "./my_balance";
export * as balance_bulk from "./balance_bulk";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<ILeaveLedger.IListQuery>;
    type Output = Primitive<IResponse<ILeaveLedger.IListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/leave-ledger";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function balance(connection: IConnection, query: balance.Query): Promise<balance.Output>;
export declare namespace balance {
    type Query = Resolved<ILeaveLedger.IBalanceQuery>;
    type Output = Primitive<IResponse<ILeaveLedger.IBalanceResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/leave-ledger/balance";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: balance.Query) => string;
}
