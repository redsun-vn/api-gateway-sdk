import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IOmnichannel } from "../../../../../../libs/shared/src/types/omnichannel-service/omnichannel.type";
export declare function getOrderCancelReasons(connection: IConnection, provider: string, query: getOrderCancelReasons.Query): Promise<getOrderCancelReasons.Output>;
export declare namespace getOrderCancelReasons {
    type Query = Resolved<IOmnichannel.OrderCancelReasonsQuery>;
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/omnichannel/:provider/orders/cancel-reasons";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (provider: string, query: getOrderCancelReasons.Query) => string;
}
