import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { IReportKitchen } from "../../../../../../libs/shared/src/types/order-service/ireport-kitchen.type";
export declare function getServiceQuality(connection: IConnection, query: getServiceQuality.Query): Promise<getServiceQuality.Output>;
export declare namespace getServiceQuality {
    type Query = Resolved<IReportKitchen.IKitchenPerformanceRequest>;
    type Output = Primitive<IResponse<IReportKitchen.IServiceQuality>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/report/kitchen/service-quality";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getServiceQuality.Query) => string;
}
