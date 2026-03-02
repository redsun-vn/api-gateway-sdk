import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReportKitchen } from "../../../../../../libs/shared/src/types/order-service/ireport-kitchen.type";
export declare function getStateDistribution(connection: IConnection, query: getStateDistribution.Query): Promise<getStateDistribution.Output>;
export declare namespace getStateDistribution {
    type Query = Resolved<IReportKitchen.IKitchenPerformanceRequest>;
    type Output = Primitive<IResponse<Array<IReportKitchen.IKdsStateDistribution>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/kitchen/state-distribution";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getStateDistribution.Query) => string;
}
