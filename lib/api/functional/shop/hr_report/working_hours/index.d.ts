import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IHRReport } from "../../../../../libs/shared/src/types/shop-service/hr-report";
export declare function getWorkingHours(connection: IConnection, query: getWorkingHours.Query): Promise<getWorkingHours.Output>;
export declare namespace getWorkingHours {
    type Query = Resolved<Omit<IHRReport.IHRReportRequest, "shop_id">>;
    type Output = Primitive<IResponse<IHRReport.IWorkingHoursAnalysisResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/hr-report/working-hours";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getWorkingHours.Query) => string;
}
