import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { IReportKitchen } from "../../../../../libs/shared/src/types/order-service/ireport-kitchen.type";
export * as performance_by_hour from "./performance_by_hour";
export * as state_distribution from "./state_distribution";
export * as top_dishes from "./top_dishes";
export * as service_quality from "./service_quality";
export * as staff_performance from "./staff_performance";
export declare function getKitchenReportData(connection: IConnection, query: getKitchenReportData.Query): Promise<getKitchenReportData.Output>;
export declare namespace getKitchenReportData {
    type Query = Resolved<IReportKitchen.IKitchenPerformanceRequest>;
    type Output = Primitive<IResponse<IReportKitchen.IKitchenReportData>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/kitchen";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getKitchenReportData.Query) => string;
}
