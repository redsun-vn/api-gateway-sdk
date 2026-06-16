import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IDeposit } from "../../../../../../libs/shared/src/types/deposit-service/ideposit";
export declare function summary(connection: IConnection, query: summary.Query): Promise<summary.Output>;
export declare namespace summary {
    type Query = Resolved<IDeposit.IFindByTarget>;
    type Output = Primitive<IResponse<IDeposit.IDepositSummary>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/deposits/summary/by-target";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: summary.Query) => string;
}
