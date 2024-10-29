import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ISaleOrder } from "../../../../../libs/shared/src/types/order-service/isale-order";
export declare function partnerConfirm(connection: IConnection, id: string, body: partnerConfirm.Input): Promise<partnerConfirm.Output>;
export declare namespace partnerConfirm {
    type Input = Resolved<ISaleOrder.IConfirmSaleOrder>;
    type Output = Primitive<IResponse<ISaleOrder.IResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/sale-orders/:id/confirm";
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
