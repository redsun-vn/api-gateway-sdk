import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
import type { ICrmReportView } from "../../../../../../../libs/shared/src/types/crm-service/ireport-view";
export declare function runView(connection: IConnection, id: string, query: runView.Query): Promise<runView.Output>;
export declare namespace runView {
    type Query = Resolved<ICrmReportView.IRunQuery>;
    type Output = Primitive<IResponse<ICrmReportView.IRunViewResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/reports/views/:id/run";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: string, query: runView.Query) => string;
}
