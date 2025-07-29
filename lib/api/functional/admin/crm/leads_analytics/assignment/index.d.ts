import type { IConnection, Primitive } from "@nestia/fetcher";
import type { ICRMLead } from "../../../../../../libs/shared/src/types/admin-service/crm/lead";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function analyticsAssignment(connection: IConnection): Promise<analyticsAssignment.Output>;
export declare namespace analyticsAssignment {
    type Output = Primitive<IResponse<ICRMLead.IAnalyticsAssignmentResult>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm/leads-analytics/assignment";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: () => string;
}
