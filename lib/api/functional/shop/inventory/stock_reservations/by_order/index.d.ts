import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IStockReservation } from "../../../../../../libs/shared/src/types/inventory-service/istock-reservation.type";
export declare function findByOrder(connection: IConnection, orderId: string): Promise<findByOrder.Output>;
export declare namespace findByOrder {
    type Output = Primitive<IResponse<Array<IStockReservation.IStockReservationResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/stock-reservations/by-order/:orderId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (orderId: string) => string;
}
