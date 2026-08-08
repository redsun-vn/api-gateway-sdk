import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmReportView } from "../../../../../../../libs/shared/src/types/crm-service/ireport-view";
export declare function activeTrials(connection: IConnection, query: activeTrials.Query): Promise<activeTrials.Output>;
export declare namespace activeTrials {
    type Query = Resolved<ICrmReportView.IMetricQuery>;
    type Output = Primitive<IResponse<ICrmReportView.IActiveTrialsResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/reports/metrics/active-trials";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: activeTrials.Query) => string;
}
