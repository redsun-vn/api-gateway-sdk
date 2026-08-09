import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmReportView } from "../../../../../../libs/shared/src/types/crm-service/ireport-view";
export declare function runAdhoc(connection: IConnection, body: runAdhoc.Input): Promise<runAdhoc.Output>;
export declare namespace runAdhoc {
    type Input = Resolved<ICrmReportView.IAdhocRunRequest>;
    type Output = Primitive<IResponse<ICrmReportView.IAdhocRunResponse>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/crm/reports/run";
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
