import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IResponse } from "../../../libs/shared/src/types/common.type";
import type { IOrder } from "../../../libs/shared/src/types/order-service/iorder.type";
export * as code from "./code";
export declare function findOnePublic(connection: IConnection, id: string): Promise<findOnePublic.Output>;
export declare namespace findOnePublic {
    type Output = Primitive<IResponse<IOrder.IDetailOrderResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/orders/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function create(connection: IConnection, input: create.Input): Promise<create.Output>;
export declare namespace create {
    type Input = Resolved<IOrder.ICreateOrderPublic>;
    type Output = Primitive<IResponse<IOrder.IDetailOrderResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/orders";
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
export declare function update(connection: IConnection, id: string, input: update.Input): Promise<update.Output>;
export declare namespace update {
    type Input = Resolved<IOrder.IUpdateOrder>;
    type Output = Primitive<IResponse<IOrder.IDetailOrderResponse>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/orders/:id";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function $delete(connection: IConnection, id: string): Promise<$delete.Output>;
export declare namespace $delete {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/orders/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
