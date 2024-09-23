import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQueryReportExport } from "../../../../../../libs/shared/src/const/report";
export declare function paymentCardExport(connection: IConnection, query: paymentCardExport.Query): Promise<paymentCardExport.Output>;
export declare namespace paymentCardExport {
    type Query = Resolved<IQueryReportExport>;
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/payment-cards/export";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: paymentCardExport.Query) => string;
}
