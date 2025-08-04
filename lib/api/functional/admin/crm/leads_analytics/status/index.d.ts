import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMLead } from "../../../../../../libs/shared/src/types/admin-service/crm/lead";
import type { IQuery, IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function analyticsStatus(connection: IConnection, query: analyticsStatus.Query): Promise<analyticsStatus.Output>;
export declare namespace analyticsStatus {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<ICRMLead.IAnalyticsStatusResult>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm/leads-analytics/status";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: analyticsStatus.Query) => string;
}
