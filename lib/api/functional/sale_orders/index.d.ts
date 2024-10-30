import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../libs/shared/src/types/common.type";
import type { ISaleOrder } from "../../../libs/shared/src/types/order-service/isale-order";
export declare function findOnePublic(connection: IConnection, id: string, query: findOnePublic.Query): Promise<findOnePublic.Output>;
export declare namespace findOnePublic {
    type Query = Resolved<ISaleOrder.IQuerySaleOrder>;
    type Output = Primitive<IResponse<ISaleOrder.IResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/sale-orders/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string, query: findOnePublic.Query) => string;
}
