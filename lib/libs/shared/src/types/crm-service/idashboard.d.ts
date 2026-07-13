import { tags } from 'typia';
export declare namespace ICrmDashboard {
    interface IDateRangeQuery {
        date_from?: string;
        date_to?: string;
        branch_id?: number;
        pipeline_id?: number;
        format?: 'csv' | 'xlsx';
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
        hot_lead_count: number;
        scored_count: number;
        avg_bant_score: number;
    }
    interface ILeadSourceAnalyticsResponse {
        items: ILeadSourceAnalyticsItem[];
    }
    interface ILeadStatsSourceBucket {
        source: string;
        count: number;
    }
    interface ILeadStatsStatusBucket {
        status: string;
        count: number;
    }
    interface ILeadStatsResponse {
        total_leads: number;
        qualified_count: number;
        conversion_rate: number;
        avg_bant_score: number;
        new_leads_last_7d: number;
        sources: ILeadStatsSourceBucket[];
        funnel: ILeadStatsStatusBucket[];
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
    interface ISlaComplianceMetric {
        total: number;
        breached: number;
        compliance_pct: number | null;
    }
    interface ISlaTrendBucket {
        date: string;
        breached: number;
    }
    interface ISlaByStageRow {
        stage_id: number | null;
        label: string;
        breached: number;
    }
    interface ISlaLeaderboardRow {
        owner_id: number;
        total: number;
        breached: number;
        compliance_pct: number | null;
    }
    interface ISlaComplianceResponse {
        first_response: ISlaComplianceMetric;
        stage_stuck: ISlaComplianceMetric;
        trend: ISlaTrendBucket[];
        by_stage: ISlaByStageRow[];
        leaderboard: ISlaLeaderboardRow[];
    }
    interface IWinLossStageRow {
        stage_id: number;
        label: string;
        won: number;
        lost: number;
        win_rate: number | null;
    }
    interface IWinLossOwnerRow {
        owner_id: number;
        won: number;
        lost: number;
        win_rate: number | null;
    }
    interface IWinLossReasonRow {
        reason: string;
        count: number;
    }
    interface IWinLossTrendBucket {
        date: string;
        won: number;
        lost: number;
    }
    interface IWinLossResponse {
        won_count: number;
        lost_count: number;
        open_count: number;
        win_rate: number;
        won_value: number;
        lost_value: number;
        by_stage: IWinLossStageRow[];
        by_owner: IWinLossOwnerRow[];
        top_lost_reasons: IWinLossReasonRow[];
        trend: IWinLossTrendBucket[];
    }
    interface IPipelineHealthStageRow {
        stage_id: number;
        label: string;
        open_count: number;
        overdue_count: number;
        avg_age_days: number;
    }
    interface IPipelineHealthResponse {
        total_open: number;
        total_overdue: number;
        by_stage: IPipelineHealthStageRow[];
    }
    interface ILeadScoringBucket {
        classification: string;
        count: number;
    }
    interface ILeadScoringDistributionResponse {
        total: number;
        scored_count: number;
        avg_score: number;
        avg_bant_score: number;
        distribution: ILeadScoringBucket[];
    }
}
