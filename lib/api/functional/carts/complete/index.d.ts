import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../libs/shared/src/types/common.type";
import type { IDrafOrder } from "../../../../libs/shared/src/types/order-service/idraf-order.type";
export declare function completeCart(connection: IConnection, id: string): Promise<completeCart.Output>;
export declare namespace completeCart {
    type Output = Primitive<IResponse<IDrafOrder.IDetailDrafOrderResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/carts/:id/complete";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: string) => string;
}
