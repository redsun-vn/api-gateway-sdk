import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQueryReportExport } from "../../../../../../libs/shared/src/const/report";
export declare function attendanceExport(connection: IConnection, query: attendanceExport.Query): Promise<attendanceExport.Output>;
export declare namespace attendanceExport {
    type Query = Resolved<IQueryReportExport>;
    type Output = Primitive<any>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/attendance/export";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: attendanceExport.Query) => string;
}
