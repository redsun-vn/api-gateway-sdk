import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { ISocialAnalytics } from "../../../../../../libs/shared/src/types/ads-service/isocial-analytics";
import type { IResponse } from "../../../../../../libs/shared/src/types/common.type";
export * as posts from "./posts";
export declare function summary(connection: IConnection, query: summary.Query): Promise<summary.Output>;
export declare namespace summary {
    type Query = Resolved<ISocialAnalytics.ISummaryQuery>;
    type Output = Primitive<IResponse<ISocialAnalytics.ISummary>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/analytics/summary";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: summary.Query) => string;
}
