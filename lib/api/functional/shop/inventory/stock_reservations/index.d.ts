import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { IStockReservation } from "../../../../../libs/shared/src/types/inventory-service/istock-reservation.type";
export * as by_order from "./by_order";
export declare function findAll(connection: IConnection, query: findAll.Query): Promise<findAll.Output>;
export declare namespace findAll {
    type Query = Resolved<IStockReservation.IFindAllQuery>;
    type Output = Primitive<IResponse<IResponsePagination<IStockReservation.IStockReservationResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/stock-reservations";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: findAll.Query) => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IStockReservation.IStockReservationResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/inventory/stock-reservations/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
