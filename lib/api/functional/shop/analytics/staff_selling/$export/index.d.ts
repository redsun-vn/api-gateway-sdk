import type { IConnection, Resolved } from "@nestia/fetcher";
import type { IQueryReportExport } from "../../../../../../libs/shared/src/const/report";
export declare function staffSellingExport(connection: IConnection, query: staffSellingExport.Query): Promise<void>;
export declare namespace staffSellingExport {
    type Query = Resolved<IQueryReportExport>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/analytics/staff-selling/export";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: staffSellingExport.Query) => string;
}
