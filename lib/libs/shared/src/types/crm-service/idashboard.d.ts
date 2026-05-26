import { tags } from 'typia';
export declare namespace ICrmDashboard {
    interface IDateRangeQuery {
        date_from?: string;
        date_to?: string;
        branch_id?: number;
        pipeline_id?: number;
    }
    interface IKpiResponse {
        revenue: number;
        pipeline_value: number;
        win_rate: number;
        cycle_time_days: number;
        open_count: number;
        won_count: number;
        lost_count: number;
    }
    interface IFunnelStage {
        stage_id: number | string;
        stage_name: string;
        count: number;
        conversion_rate: number;
    }
    interface IFunnelResponse {
        pipeline_id: number | string;
        stages: IFunnelStage[];
    }
    interface IVelocityRow {
        owner_id: number | string;
        owner_name: string;
        deals_won: number;
        avg_cycle_time_days: number;
        revenue: number;
    }
    interface IVelocityResponse {
        rows: IVelocityRow[];
    }
    interface ILeaderboardRow {
        owner_id: number | string;
        owner_name: string;
        score: number;
        rank: number;
    }
    interface ILeaderboardResponse {
        rows: ILeaderboardRow[];
    }
    interface IWidget {
        kpi_id: string;
        enabled: boolean;
        position?: number;
        group_by?: string;
    }
    interface IWidgetsConfigResponse {
        widgets: IWidget[];
    }
    interface IUpdateWidgetsConfig {
        widgets: IWidget[] & tags.MinItems<0> & tags.MaxItems<12>;
    }
    interface IRevenueTrendBucket {
        week_start: string;
        revenue: number;
    }
    interface IRevenueTrendResponse {
        weeks: IRevenueTrendBucket[];
    }
    interface ILeadConversionResponse {
        total_leads: number;
        converted_leads: number;
        conversion_rate: number;
    }
    interface IActivityPerOppResponse {
        activity_count: number;
        opportunity_count: number;
        ratio: number;
    }
    interface ILeadSourceAnalyticsItem {
        source: string;
        leads_count: number;
        conversion_count: number;
        conversion_rate: number;
        avg_deal_size: number;
    }
    interface ILeadSourceAnalyticsResponse {
        items: ILeadSourceAnalyticsItem[];
    }
    interface IRecentActivityQuery {
        limit?: number & tags.Type<'int32'> & tags.Minimum<1> & tags.Maximum<50>;
    }
    interface IRecentActivityItem {
        id: string;
        type: string;
        subject: string;
        related_to_type: string;
        related_to_id: number;
        owner_id: number;
        direction: string | null;
        created_at: string;
    }
    interface IRecentActivityResponse {
        items: IRecentActivityItem[];
    }
}
