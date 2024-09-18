import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQueryReportExport } from "../../../../../../libs/shared/src/const/report";
export declare function orderProfitExport(connection: IConnection, query: orderProfitExport.Query): Promise<orderProfitExport.Output>;
export declare namespace orderProfitExport {
    type Query = Resolved<IQueryReportExport>;
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/order-profits/export";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: orderProfitExport.Query) => string;
}
