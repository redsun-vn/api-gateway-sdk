import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQueryReportExport } from "../../../../../../libs/shared/src/const/report";
export declare function productBestSellingExport(connection: IConnection, query: productBestSellingExport.Query): Promise<productBestSellingExport.Output>;
export declare namespace productBestSellingExport {
    type Query = Resolved<IQueryReportExport>;
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/best-selling/export";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: productBestSellingExport.Query) => string;
}
