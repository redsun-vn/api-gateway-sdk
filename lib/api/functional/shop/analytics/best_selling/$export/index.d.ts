import type { IConnection, Resolved } from "@nestia/fetcher";
import type { IQueryReportExport } from "../../../../../../libs/shared/src/const/report";
export declare function bestSellingVariantsExport(connection: IConnection, query: bestSellingVariantsExport.Query): Promise<void>;
export declare namespace bestSellingVariantsExport {
    type Query = Resolved<IQueryReportExport>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/analytics/best-selling/export";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: bestSellingVariantsExport.Query) => string;
}
