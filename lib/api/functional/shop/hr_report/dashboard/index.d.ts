import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IHRReport } from "../../../../../libs/shared/src/types/shop-service/hr-report";
export declare function getDashboard(connection: IConnection, query: getDashboard.Query): Promise<getDashboard.Output>;
export declare namespace getDashboard {
    type Query = Resolved<Omit<IHRReport.IHRReportRequest, "shop_id">>;
    type Output = Primitive<IResponse<IHRReport.IHRDashboard>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr-report/dashboard";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getDashboard.Query) => string;
}
