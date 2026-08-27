import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ILeaveLedger } from "../../../../../../../libs/shared/src/types/hr/salary/leave-ledger";
export declare function myLedger(connection: IConnection, query: myLedger.Query): Promise<myLedger.Output>;
export declare namespace myLedger {
    type Query = Resolved<ILeaveLedger.IMyLedgerQuery>;
    type Output = Primitive<IResponse<ILeaveLedger.IListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr/salary/leave-ledger/my-ledger";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: myLedger.Query) => string;
}
