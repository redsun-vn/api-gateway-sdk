import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReportKitchen } from "../../../../../../libs/shared/src/types/order-service/ireport-kitchen.type";
export declare function getStaffPerformance(connection: IConnection, query: getStaffPerformance.Query): Promise<getStaffPerformance.Output>;
export declare namespace getStaffPerformance {
    type Query = Resolved<IReportKitchen.IKitchenPerformanceRequest>;
    type Output = Primitive<IResponse<Array<IReportKitchen.IKitchenStaffPerformance>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/kitchen/staff-performance";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getStaffPerformance.Query) => string;
}
