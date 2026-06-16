import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IOrder } from "../../../../../libs/shared/src/types/order-service/iorder.type";
export declare function applyDeposit(connection: IConnection, id: string, body: applyDeposit.Input): Promise<applyDeposit.Output>;
export declare namespace applyDeposit {
    type Input = Resolved<IOrder.IApplyDeposit>;
    type Output = Primitive<IResponse<IOrder.IApplyDepositResult>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/orders/:id/apply-deposit";
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
    const path: (id: string) => string;
}
