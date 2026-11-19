import { tags } from 'typia';
import { ICrmTask } from './itask';
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
        reached_count?: number;
        conversion_rate: number;
    }
    interface IFunnelResponse {
        pipeline_id: number | string;
        stages: IFunnelStage[];
    }
    interface IFunnelReachedResponse {
        stages: Array<{
            stage_id: number;
            reached: number;
        }>;
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
    type Id = number | string;
    type IsoDate = Date | string;
    type WorkSummarySection = 'work' | 'departments' | 'recent_done';
    type DashboardScope = 'shop' | 'team' | 'self';
    interface IWorkSummaryQuery {
        date_from?: string;
        date_to?: string;
        pipeline_id?: number;
        sections?: string;
    }
    interface IWorkSummaryRpcInput {
        shop_id: Id;
        timezone: string;
        scoped_assignee_ids?: Id[];
        sections: WorkSummarySection[];
    }
    interface IStaffBrief {
        staff_id: Id;
        name: string | null;
        position: string | null;
    }
    interface IWeeklyFlowItem {
        iso_week: number;
        week_start: string;
        created: number;
        completed: number;
    }
    interface IWorkBlock {
        open: {
            count: number;
            late: number;
        };
        done_7d: {
            count: number;
            previous: number;
            change_pct: number | null;
            on_time: number;
        };
        department_count: number;
        weekly_flow: IWeeklyFlowItem[];
        weekly_net: number;
    }
    interface IDepartmentRow {
        id: Id | null;
        name: string | null;
        head: IStaffBrief | null;
        staff_count: number;
        open: number;
        late: number;
        done_7d: number;
        on_time_7d: number;
        on_time_rate: number | null;
    }
    interface IRecentDoneItem {
        task_id: Id;
        subject: string;
        related_to_type: string | null;
        related_to_id: Id | null;
        assignee: IStaffBrief | null;
        completed_at: IsoDate;
        due_at: IsoDate | null;
        on_time: boolean;
    }
    interface IRecentDoneBlock {
        total: number;
        items: IRecentDoneItem[];
    }
    interface IWorkSummaryRpcResponse {
        generated_at: IsoDate;
        timezone: string;
        work: IWorkBlock | null;
        departments: IDepartmentRow[] | null;
        recent_done: IRecentDoneBlock | null;
    }
    interface IFunnelStep {
        from_stage_id: Id;
        from: string;
        to_stage_id: Id;
        to: string;
        reached: number;
        passed: number;
        rate: number;
    }
    interface IWorkSummaryResponse extends IWorkSummaryRpcResponse {
        scope: DashboardScope;
        funnel_steps: IFunnelStep[] | null;
        pipeline_id: Id | null;
    }
    interface IOpportunityBoardSummaryQuery {
        pipeline_id?: number;
    }
    interface IOpportunityBoardSummaryRpcInput {
        shop_id: Id;
        timezone: string;
        pipeline_id?: Id;
        scoped_owner_ids?: Id[];
    }
    interface IOpportunityBoardSummaryResponse {
        open_count: number;
        open_value: number;
        weighted_value: number;
        closing_this_month_value: number;
        closing_this_month_count: number;
        attention_count: number;
        overdue_count: number;
        stale_count: number;
        reassign_count: number;
    }
    type MySummarySection = 'focus' | 'today_urgent' | 'agenda_week' | 'approvals' | 'alerts' | 'win_rate_90d';
    interface IMySummaryQuery {
        sections?: string;
        date_from?: string;
        date_to?: string;
        upcoming_only?: boolean;
    }
    type MySummaryFocusMode = 'approvals' | 'tasks';
    interface IMySummaryFocus {
        mode: MySummaryFocusMode;
        items: ICrmTask.IFocusTaskItem[];
        total_open: number;
        total_late: number;
        stuck_deal_count: number | null;
        critical_alert_count: number | null;
    }
    interface IMySummaryTodayUrgent {
        total: number;
        overdue_count: number;
        items: ICrmTask.ITodayUrgentItem[];
    }
    interface IMySummaryAgendaWeek {
        week: ICrmTask.IAgendaDay[];
        items: ICrmTask.IAgendaItem[];
        hidden_count: number;
    }
    interface IMySummaryApprovalItem {
        sale_order_id: Id;
        sale_order_code: string | null;
        submitted_at: IsoDate;
        sla_deadline_at: IsoDate | null;
        sla_priority: string | null;
        total: number;
    }
    interface IMySummaryApprovals {
        total: number;
        items: IMySummaryApprovalItem[];
    }
    type MySummaryAlertSeverity = 'critical' | 'attention';
    type MySummaryAlertSource = 'crm' | 'fin' | 'inv';
    type MySummaryAlertKind = 'stage_overdue' | 'receivable_over_90' | 'low_stock' | 'gross_margin_drop';
    interface IMySummaryAlertItem {
        kind: MySummaryAlertKind;
        severity: MySummaryAlertSeverity;
        source: MySummaryAlertSource;
        stage_id?: Id;
        label?: string;
        count: number;
        value?: number;
        previous_value?: number;
    }
    interface IMySummaryAlerts {
        total: number;
        items: IMySummaryAlertItem[];
    }
    interface IMySummaryWinRate {
        rate: number | null;
        won: number;
        closed: number;
        previous_rate: number | null;
    }
    interface IMySummaryResponse {
        generated_at: IsoDate;
        timezone: string;
        focus: IMySummaryFocus | null;
        today_urgent: IMySummaryTodayUrgent | null;
        agenda_week: IMySummaryAgendaWeek | null;
        approvals: IMySummaryApprovals | null;
        alerts: IMySummaryAlerts | null;
        win_rate_90d: IMySummaryWinRate | null;
    }
}
