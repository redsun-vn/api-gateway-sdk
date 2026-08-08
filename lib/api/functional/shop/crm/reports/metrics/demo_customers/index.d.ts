import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmReportView } from "../../../../../../../libs/shared/src/types/crm-service/ireport-view";
export declare function demoCustomers(connection: IConnection, query: demoCustomers.Query): Promise<demoCustomers.Output>;
export declare namespace demoCustomers {
    type Query = Resolved<ICrmReportView.IMetricQuery>;
    type Output = Primitive<IResponse<ICrmReportView.IMetricSeriesResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/reports/metrics/demo-customers";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: demoCustomers.Query) => string;
}
