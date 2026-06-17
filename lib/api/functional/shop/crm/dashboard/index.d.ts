import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import type { IResponse } from "../../../../../libs/shared/src/types/common.type";
import type { ICrmDashboard } from "../../../../../libs/shared/src/types/crm-service/idashboard";
export * as revenue_trend from "./revenue_trend";
export * as lead_conversion from "./lead_conversion";
export * as activity_per_opp from "./activity_per_opp";
export * as lead_source_analytics from "./lead_source_analytics";
export * as recent_activity from "./recent_activity";
export * as widgets_config from "./widgets_config";
export declare function $export(connection: IConnection, query: $export.Query): Promise<void>;
export declare namespace $export {
    type Query = Resolved<ICrmDashboard.IDateRangeQuery>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/dashboard/export";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: $export.Query) => string;
}
export declare function kpi(connection: IConnection, query: kpi.Query): Promise<kpi.Output>;
export declare namespace kpi {
    type Query = Resolved<ICrmDashboard.IDateRangeQuery>;
    type Output = Primitive<IResponse<ICrmDashboard.IKpiResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/dashboard/kpi";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: kpi.Query) => string;
}
export declare function funnel(connection: IConnection, query: funnel.Query): Promise<funnel.Output>;
export declare namespace funnel {
    type Query = Resolved<ICrmDashboard.IDateRangeQuery>;
    type Output = Primitive<IResponse<ICrmDashboard.IFunnelResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/dashboard/funnel";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: funnel.Query) => string;
}
export declare function velocity(connection: IConnection, query: velocity.Query): Promise<velocity.Output>;
export declare namespace velocity {
    type Query = Resolved<ICrmDashboard.IDateRangeQuery>;
    type Output = Primitive<IResponse<ICrmDashboard.IVelocityResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/dashboard/velocity";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: velocity.Query) => string;
}
export declare function leaderboard(connection: IConnection, query: leaderboard.Query): Promise<leaderboard.Output>;
export declare namespace leaderboard {
    type Query = Resolved<ICrmDashboard.IDateRangeQuery>;
    type Output = Primitive<IResponse<ICrmDashboard.ILeaderboardResponse>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/crm/dashboard/leaderboard";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (query: leaderboard.Query) => string;
}
