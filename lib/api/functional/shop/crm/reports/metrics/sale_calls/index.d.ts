import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmReportView } from "../../../../../../../libs/shared/src/types/crm-service/ireport-view";
export declare function saleCalls(connection: IConnection, query: saleCalls.Query): Promise<saleCalls.Output>;
export declare namespace saleCalls {
    type Query = Resolved<ICrmReportView.IMetricQuery>;
    type Output = Primitive<IResponse<ICrmReportView.ISaleCallsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/reports/metrics/sale-calls";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: saleCalls.Query) => string;
}
