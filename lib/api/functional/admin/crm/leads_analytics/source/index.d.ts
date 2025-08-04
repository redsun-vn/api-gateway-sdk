import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ICRMLead } from "../../../../../../libs/shared/src/types/admin-service/crm/lead";
import type { IQuery, IResponse } from "../../../../../../libs/shared/src/types/common.type";
export declare function analyticsSource(connection: IConnection, query: analyticsSource.Query): Promise<analyticsSource.Output>;
export declare namespace analyticsSource {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<ICRMLead.IAnalyticsSourceResult>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/crm/leads-analytics/source";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: analyticsSource.Query) => string;
}
