import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IPackage } from "../../../../../../libs/shared/src/types/ipackage";
export declare function getPackageReport(connection: IConnection, query: getPackageReport.Query): Promise<getPackageReport.Output>;
export declare namespace getPackageReport {
    type Query = Resolved<IPackage.PackageReportRequest>;
    type Output = Primitive<IResponse<IPackage.PackageReport>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/packages/reports/metrics";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getPackageReport.Query) => string;
}
