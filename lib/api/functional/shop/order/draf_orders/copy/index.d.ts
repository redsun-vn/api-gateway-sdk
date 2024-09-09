import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IDrafOrder } from "../../../../../../libs/shared/src/types/order-service/idraf-order.type";
export declare function createCopy(connection: IConnection, draftId: string): Promise<createCopy.Output>;
export declare namespace createCopy {
    type Output = Primitive<IResponse<IDrafOrder.IDetailDrafOrderResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/order/draf-orders/:id/copy";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (draftId: string) => string;
}
