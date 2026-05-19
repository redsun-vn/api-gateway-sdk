import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IDeposit } from "../../../../../libs/shared/src/types/deposit-service/ideposit";
export declare function applyToOrder(connection: IConnection, body: applyToOrder.Input): Promise<applyToOrder.Output>;
export declare namespace applyToOrder {
    type Input = Resolved<IDeposit.IApplyToOrder>;
    type Output = Primitive<IResponse<IDeposit.IApplyResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/deposits/apply-to-order";
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
