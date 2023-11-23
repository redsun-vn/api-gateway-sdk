import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IProductReservation } from "../../../../../libs/shared/src/types/reservation-service/iproduct-reservation";
export declare function findAll(connection: IConnection, reservationId: string): Promise<findAll.Output>;
export declare namespace findAll {
    type Output = Primitive<IResponse<Array<IProductReservation.IProductReservationResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/:reservationId/products";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (reservationId: string) => string;
}
export declare function findOne(connection: IConnection, id: string): Promise<findOne.Output>;
export declare namespace findOne {
    type Output = Primitive<IResponse<IProductReservation.IProductReservationResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/reservation/products/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/reservation/products/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
export declare function create(connection: IConnection, data: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Primitive<IProductReservation.ICreate>;
    type Output = Primitive<IResponse<IProductReservation.IProductReservationResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/reservation/products";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: () => string;
}
export declare function update(connection: IConnection, data: update.Input, id: string): Promise<update.Output>;
export declare namespace update {
    type Input = Primitive<IProductReservation.IUpdate>;
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/reservation/products/:id";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: null;
    };
    const path: (id: string) => string;
}
