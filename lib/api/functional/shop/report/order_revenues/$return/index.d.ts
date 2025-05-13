import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IOrderRevenue } from "../../../../../../libs/shared/src/types/report-service/iorder-revenue.type";
export declare function orderReturn(connection: IConnection, query: orderReturn.Query): Promise<orderReturn.Output>;
export declare namespace orderReturn {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<Array<IOrderRevenue.IOrderReturnReport>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/order-revenues/return";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: orderReturn.Query) => string;
}
