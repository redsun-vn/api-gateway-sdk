import type { IConnection, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function getOrderMappingByOrder(connection: IConnection, localOrderId: number): Promise<getOrderMappingByOrder.Output>;
export declare namespace getOrderMappingByOrder {
    type Output = Primitive<IResponse<any>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/omnichannel/orders/mapping/by-order/:localOrderId";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (localOrderId: number) => string;
}
