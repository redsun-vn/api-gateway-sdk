import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
import type { ICrmDashboard } from "../../../../../../libs/shared/src/types/crm-service/idashboard";
export declare function leadConversion(connection: IConnection, query: leadConversion.Query): Promise<leadConversion.Output>;
export declare namespace leadConversion {
    type Query = Resolved<ICrmDashboard.IDateRangeQuery>;
    type Output = Primitive<IResponse<ICrmDashboard.ILeadConversionResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/dashboard/lead-conversion";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: leadConversion.Query) => string;
}
