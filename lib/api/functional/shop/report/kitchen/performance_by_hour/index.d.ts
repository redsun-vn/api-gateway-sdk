import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReportKitchen } from "../../../../../../libs/shared/src/types/order-service/ireport-kitchen.type";
export declare function getPerformanceByHour(connection: IConnection, query: getPerformanceByHour.Query): Promise<getPerformanceByHour.Output>;
export declare namespace getPerformanceByHour {
    type Query = Resolved<IReportKitchen.IKitchenPerformanceRequest>;
    type Output = Primitive<IResponse<Array<IReportKitchen.IKitchenPerformanceByHour>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/kitchen/performance-by-hour";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getPerformanceByHour.Query) => string;
}
