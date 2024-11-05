import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IQuery, IResponse, IResponsePagination } from "../../../../../libs/shared/src/types/common.type";
import type { ISubscription } from "../../../../../libs/shared/src/types/isubscription";
export declare function getReportSubscriptions(connection: IConnection, query: getReportSubscriptions.Query): Promise<getReportSubscriptions.Output>;
export declare namespace getReportSubscriptions {
    type Query = Resolved<IQuery>;
    type Output = Primitive<IResponse<IResponsePagination<ISubscription.ISubscriptionReportResponse>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/admin/reports/subscriptions";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: getReportSubscriptions.Query) => string;
}
