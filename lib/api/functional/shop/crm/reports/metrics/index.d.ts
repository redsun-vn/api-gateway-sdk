import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmReportView } from "../../../../../../libs/shared/src/types/crm-service/ireport-view";
export * as sale_calls from "./sale_calls";
export * as demo_customers from "./demo_customers";
export * as contracts_signed from "./contracts_signed";
export * as active_trials from "./active_trials";
export declare function listMetrics(connection: IConnection, query: listMetrics.Query): Promise<listMetrics.Output>;
export declare namespace listMetrics {
    type Query = Resolved<ICrmReportView.IAdminMetricQuery>;
    type Output = Primitive<IResponse<ICrmReportView.IAdminMetricListResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/reports/metrics";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: listMetrics.Query) => string;
}
export declare function createMetric(connection: IConnection, body: createMetric.Input): Promise<createMetric.Output>;
export declare namespace createMetric {
    type Input = Resolved<ICrmReportView.IWriteMetric>;
    type Output = Primitive<IResponse<ICrmReportView.IAdminMetric>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/reports/metrics";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: () => string;
}
export declare function updateMetric(connection: IConnection, id: string, body: updateMetric.Input): Promise<updateMetric.Output>;
export declare namespace updateMetric {
    type Input = Resolved<ICrmReportView.IWriteMetric>;
    type Output = Primitive<IResponse<ICrmReportView.IAdminMetric>>;
    const METADATA: {
        readonly method: "PUT";
        readonly path: "/shop/crm/reports/metrics/:id";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
export declare function retireMetric(connection: IConnection, id: string): Promise<retireMetric.Output>;
export declare namespace retireMetric {
    type Output = Primitive<IResponse<false | true>>;
    const METADATA: {
        readonly method: "DELETE";
        readonly path: "/shop/crm/reports/metrics/:id";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string) => string;
}
