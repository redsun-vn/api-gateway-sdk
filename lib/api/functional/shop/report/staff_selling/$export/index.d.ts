import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQueryReportExport } from "../../../../../../libs/shared/src/const/report";
export declare function staffBestSellingExport(connection: IConnection, query: staffBestSellingExport.Query): Promise<staffBestSellingExport.Output>;
export declare namespace staffBestSellingExport {
    type Query = Resolved<IQueryReportExport>;
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/staff-selling/export";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: staffBestSellingExport.Query) => string;
}
