import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../libs/shared/src/types/common.type";
import type { IOrder } from "../../../libs/shared/src/types/order-service/iorder.type";
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
        readonly status: null;
    };
    const path: (id: string) => string;
}
