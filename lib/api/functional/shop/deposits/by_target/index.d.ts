import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IDeposit } from "../../../../../libs/shared/src/types/deposit-service/ideposit";
export declare function findByTarget(connection: IConnection, query: findByTarget.Query): Promise<findByTarget.Output>;
export declare namespace findByTarget {
    type Query = Resolved<IDeposit.IFindByTarget>;
    type Output = Primitive<IResponse<Array<IDeposit.IDepositResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/deposits/by-target";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findByTarget.Query) => string;
}
