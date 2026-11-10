import { tags } from 'typia';
type PositiveInt = number & tags.Type<'uint32'> & tags.Minimum<1>;
type Id = number | string;
type Reason = string & tags.Pattern<'^[a-z_]{1,48}$'>;
export declare namespace IMktOsResults {
    export type ParticipantStatus = 'waiting' | 'sent' | 'replied' | 'returned' | 'skipped' | 'failed' | 'exited' | 'clicked';
    export type ActivityType = 'send' | 'reply' | 'order' | 'user_change' | 'system';
    export interface IHeadline {
        key: 'reached' | 'replied' | 'returned';
        value: number;
        rate: number | null;
        filter: {
            status: 'sent' | 'replied' | 'returned';
        };
    }
    export interface ITiers {
        enrolled: number;
        sent: {
            reached: number;
            sends: number;
        };
        engagement: {
            replied: number | null;
            reply_rate: number | null;
            unsubscribed: number;
            unsubscribe_rate: number | null;
        };
        conversion: {
            returned: number | null;
            converted: number | null;
            conversion_rate: number | null;
            opportunities: number | null;
            opportunity_rate: number | null;
        };
        comparison: {
            journeys: number;
            reply_rate: number | null;
            opportunity_rate: number | null;
            won_rate?: number | null;
            unsubscribe_rate?: number | null;
        } | null;
        opportunity?: IOpportunityTier | null;
        customer?: ICustomerTier | null;
    }
    export interface IOpportunityTier {
        stage_changed: number;
        stage_changed_rate: number | null;
        won: number;
        won_rate: number | null;
        won_value: number;
    }
    export interface ICustomerTier {
        new_order_customers: number;
        new_order_rate: number | null;
        orders: number;
        revenue: number;
    }
    export interface IAttribution {
        direct: {
            conversions: number;
            value: number;
        } | null;
        time_window: {
            orders: number;
            customers: number;
            value: number;
            window_days: number;
        } | null;
        utm?: {
            orders: number;
            value: number;
            window_days: number;
        } | null;
    }
    export type ClickTracking = 'tracked' | 'partial' | 'not_tracked';
    export interface IClickBreakdownRow {
        key: string;
        clicks: number;
    }
    export interface IResultClicks {
        clicked: number;
        clicks: number;
        click_rate: number | null;
        reached_tracked: number;
        by_step: Array<{
            activity_id: number;
            seq: number;
            clicked: number;
            clicks: number;
        }>;
        by_channel: Array<{
            channel: string;
            clicked: number;
            clicks: number;
            click_tracking: ClickTracking;
        }>;
        by_link: Array<{
            channel: string;
            display_url: string;
            param_name: string | null;
            clicked: number;
            clicks: number;
        }>;
        breakdown: {
            device_type: IClickBreakdownRow[];
            referrer_app: IClickBreakdownRow[];
            region_code: IClickBreakdownRow[];
        };
    }
    export interface IChannelLine {
        channel: 'email' | 'sms' | 'zns';
        reached: number;
        sends: number;
        unsubscribed: number | null;
        unsubscribe_rate: number | null;
        failed: number;
        cost?: number | null;
    }
    export interface ITarget {
        metric: string | null;
        target: number | null;
        actual: number | null;
        progress: number | null;
    }
    export interface IStepFunnel {
        activity_id: number;
        seq: number;
        channel: string | null;
        waiting: number;
        sent: number;
        skipped: number;
        failed: number;
        exited: number;
        tasks: number;
        skip_reasons: Array<{
            reason: string | null;
            count: number;
        }>;
    }
    export interface IResultCost {
        currency: 'VND';
        sms: {
            sends: number;
            amount: number;
            unpriced_sends: number;
            unit_price: number | null;
            missing_unit_price: boolean;
        } | null;
        zns?: {
            sends: number;
            amount: number;
            unpriced_sends: number;
        } | null;
        total: number;
    }
    export interface INextStepCondition {
        field: string;
        op: string;
        value: string[];
    }
    export interface IResultNextStep {
        received_not_replied: number;
        received_not_returned?: number;
        not_received?: number | null;
        audience: INextStepAudience;
        clicked_not_converted?: {
            count: number | null;
            audience: INextStepAudience;
        };
    }
    export interface INextStepAudience {
        target: 'lead' | 'opportunity' | 'customer' | 'subscriber';
        name: string;
        filter: {
            all: INextStepCondition[];
        };
    }
    export interface ILeadSourceRow {
        source: string;
        enrolled: number;
        reached: number;
        replied: number;
        opportunities: number;
        reply_rate: number | null;
        opportunity_rate: number | null;
    }
    export interface IResultReport {
        campaign: {
            id: number;
            name: string | null;
            status: string;
        };
        view: 'owner' | 'marketer';
        counts_only: boolean;
        has_data: boolean;
        headline: IHeadline[];
        tiers: ITiers;
        attribution?: IAttribution;
        by_channel?: IChannelLine[] | null;
        target: ITarget;
        steps: IStepFunnel[];
        channels: Array<{
            channel: string;
            sends: number;
        }>;
        lead_sources: ILeadSourceRow[];
        guard: {
            capped: number;
            warning: string | null;
        };
        cost: IResultCost | null;
        next_step: IResultNextStep;
        clicks?: IResultClicks;
        effectiveness?: IResultEffectiveness;
    }
    export interface IStepOutcome {
        activity_id: number;
        seq: number;
        delivered: number;
        replied: number;
        unsubscribed: number;
        results: number;
        result_value: number;
    }
    export interface IResultEffectiveness {
        delivered: number;
        results: number;
        revenue: number;
        revenue_per_recipient: number | null;
        message_cost: number;
        ai_credits: number;
        credit_price_vnd: number | null;
        ai_cost: number | null;
        cost_per_result: number | null;
        revenue_per_cost: number | null;
        time_to_result: {
            median_days: number | null;
            count: number;
            median_hidden: boolean;
        };
        steps: IStepOutcome[];
        lift: ILift | null;
        advice: IAdvice[];
    }
    export interface IAdvice {
        code: 'lift_negative' | 'lift_positive' | 'lift_unsure' | 'unsubscribe_high' | 'no_result' | 'click_low' | 'cost_high' | 'doing_well';
        text: string;
        step_seq?: number;
    }
    export interface ILiftGroup {
        people: number;
        results: number;
        revenue: number;
        rate: number | null;
    }
    export interface ILift {
        treatment: ILiftGroup;
        control: ILiftGroup;
        lift_points: number | null;
        ci_low: number | null;
        ci_high: number | null;
        conclusive: boolean | null;
        revenue_per_person_diff: number | null;
        counts_only: boolean;
    }
    export interface IParticipantListQuery {
        status?: ParticipantStatus;
        step?: PositiveInt;
        reason?: Reason;
        q?: string & tags.MaxLength<100>;
        page?: PositiveInt;
    }
    export interface IParticipantRow {
        id: number;
        name: string | null;
        has_email: boolean;
        has_phone?: boolean;
        status: ParticipantStatus;
        status_reason: string | null;
        step_seq: number | null;
        enrolled_at: string;
        exited_at: string | null;
        replied_at: string | null;
        last_sent_at: string | null;
    }
    export interface IParticipantPage {
        items: IParticipantRow[];
        total: number;
        page: number;
        page_size: number;
    }
    export type TimelineEventType = 'enrolled' | 'scheduled' | 'deferred' | 'skipped' | 'sent' | 'failed' | 'replied' | 'converted' | 'exited' | 'task_created' | 'labeled' | 'link_clicked';
    export interface ITimelineEvent {
        at: string;
        type: TimelineEventType;
        step_seq: number | null;
        reason: string | null;
        assignee_name?: string | null;
        channel?: string;
        display_url?: string;
        device_type?: string | null;
    }
    export interface IParticipantDetail {
        id: number;
        campaign_id: number;
        name: string | null;
        has_email: boolean;
        state: string;
        exit_reason: string | null;
        enrolled_at: string;
        exited_at: string | null;
        replied_at: string | null;
        can_open_record: boolean;
        record: {
            type: 'lead' | 'customer';
            id: number | string;
        } | null;
        events: ITimelineEvent[];
    }
    export interface IParticipantExitRequest {
        reason: string & tags.MinLength<1> & tags.MaxLength<200>;
    }
    export interface IParticipantExitResponse {
        ok: true;
        item: IParticipantRow;
    }
    export interface IActivityQuery {
        type?: ActivityType;
        page?: PositiveInt;
    }
    export interface IActivityActor {
        kind: 'ai' | 'staff' | 'system';
        staff_id: number | null;
        name: string;
    }
    export interface IActivityItem {
        at: string;
        type: ActivityType;
        code: string;
        actor: IActivityActor;
        text: string;
        participant_id: number | null;
    }
    export interface IActivityPage {
        items: IActivityItem[];
        total: number;
        page: number;
        page_size: number;
    }
    export interface IMarketingLead {
        id: Id;
        shop_id: Id;
        branch_id: Id | null;
        name: string | null;
        company_name: string | null;
        source: string | null;
        status: string | null;
        score: number | null;
        bant_classification: string | null;
        owner_id: Id | null;
        team_id: Id | null;
        sla_priority: string | null;
        campaign_id: Id | null;
        intended_pipeline_id: Id | null;
        converted_opportunity_id: Id | null;
        tags: string[] | null;
        created_at: string | null;
        updated_at: string | null;
        has_phone: boolean;
        has_email: boolean;
    }
    export interface IMarketingJourney {
        participant_id: number;
        campaign_id: number;
        name: string | null;
        campaign_status: string;
        target?: string | null;
        via_lead_id?: number | null;
        state: string;
        exit_reason: string | null;
        enrolled_at: string | null;
        exited_at: string | null;
        replied_at: string | null;
        sends: number;
        last_sent_at: string | null;
        conversions: Array<{
            source_event: string;
            occurred_at: string | null;
        }>;
        clicks?: Array<{
            at: string | null;
            step_seq: number | null;
            display_url: string;
        }>;
    }
    export interface IMarketingSignal {
        signal_type: string;
        intent_type: string;
        topic_ref: string | null;
        strength: number;
        observed_at: string | null;
        expires_at: string | null;
    }
    type CampaignLinkUrl = string & tags.Pattern<'^[hH][tT][tT][pP][sS]?://'> & tags.MaxLength<2000>;
    export interface ICampaignLinkStats {
        clicks: number;
        visitors_estimated: number;
        breakdown: {
            device_type: IClickBreakdownRow[];
            referrer_app: IClickBreakdownRow[];
            region_code: IClickBreakdownRow[];
        };
    }
    export interface ICampaignLink {
        id: number;
        campaign_id: number;
        label: string | null;
        url: string;
        final_url: string;
        short_url: string | null;
        token: string;
        utm_medium: string;
        status: 'active' | 'disabled';
        outside_business_domains: boolean;
        is_bos_website: boolean;
        created_at: string;
        updated_at: string;
        stats: ICampaignLinkStats;
    }
    export interface ICampaignLinkList {
        items: ICampaignLink[];
    }
    export interface ICampaignLinkCreateRequest {
        url: CampaignLinkUrl;
        label?: (string & tags.MaxLength<60>) | null;
    }
    export interface ICampaignLinkUpdateRequest {
        url?: CampaignLinkUrl;
        label?: (string & tags.MaxLength<60>) | null;
    }
    export interface ICampaignLinkSaved {
        ok: true;
        item: ICampaignLink;
    }
    export type UnsubscribeRecordType = 'lead' | 'customer';
    export interface IRecordUnsubscribeRequest {
        channel: 'sms';
        reason?: string & tags.MaxLength<300>;
    }
    export interface IRecordUnsubscribeResponse {
        ok: true;
        created: boolean;
    }
    export interface IMarketingCustomer {
        id: Id;
        uuid: string | null;
        shop_id: Id;
        branch_id?: Id | null;
        code?: string | null;
        display_name?: string | null;
        first_name?: string | null;
        last_name?: string | null;
        company_name?: string | null;
        gender?: number | string | null;
        is_customer?: boolean | null;
        is_company?: boolean | null;
        accepts_marketing?: boolean | null;
        orders_count?: number | null;
        birth_md?: string;
        createdAt?: string | null;
        updatedAt?: string | null;
        has_phone: boolean;
        has_email: boolean;
    }
    export interface IMarketingTask {
        id: number;
        subject: string;
        status: string;
        priority: string | null;
        due_at: string | null;
        assignee_id: number | null;
        related_to: {
            type: string;
            id: number;
        };
        created_at: string | null;
    }
    export interface IRecordMarketing {
        type: 'lead' | 'customer';
        record: IMarketingLead | IMarketingCustomer;
        journeys: IMarketingJourney[];
        signals: IMarketingSignal[];
        tasks?: IMarketingTask[];
    }
    export type ApprovalStatus = 'pending' | 'approved' | 'declined';
    export interface IApprovalListQuery {
        view?: 'mine' | 'progress';
        campaign_id?: PositiveInt;
        opportunity_id?: PositiveInt;
        status?: ApprovalStatus;
        page?: PositiveInt;
    }
    export interface IApprovalItem {
        campaign_id: number;
        journey_name: string | null;
        opportunity_id: number;
        opportunity_name: string | null;
        stage_name: string | null;
        value: number | null;
        owner_id: number | null;
        owner_name: string | null;
        customer_name: string | null;
        status: ApprovalStatus;
        stale: boolean;
        decided_at: string | null;
        decided_by: {
            staff_id: number;
            name: string | null;
        } | null;
        is_proxy: boolean;
        decline_reason: string | null;
        others_waiting: number;
        can_decide: boolean;
    }
    export interface IApprovalProgress {
        owner_id: number | null;
        owner_name: string | null;
        pending: number;
        approved: number;
        declined: number;
    }
    export interface IApprovalPage {
        items: IApprovalItem[];
        total: number;
        page: number;
        page_size: number;
        progress: IApprovalProgress[] | null;
    }
    export interface IApprovalGetQuery {
        campaign_id: PositiveInt;
    }
    export interface IApprovalMessage {
        seq: number;
        channel: string;
        subject?: string;
        preheader?: string;
        paragraphs?: string[];
        signature?: string;
        template_content?: string;
        zns_template_id?: number | null;
        params?: Array<Record<string, unknown>>;
    }
    export interface IApprovalDetail extends IApprovalItem {
        messages: IApprovalMessage[];
    }
    export interface IApprovalDecideRequest {
        campaign_id: PositiveInt;
        opportunity_ids?: Array<PositiveInt> & tags.MinItems<1> & tags.MaxItems<100>;
        decision: 'approve' | 'decline';
        reason?: string & tags.MaxLength<300>;
    }
    export interface IApprovalDecided {
        ok: true;
        items: IApprovalItem[];
    }
    export interface IApprovalRemindRequest {
        campaign_id: PositiveInt;
        owner_id?: PositiveInt;
    }
    export interface IApprovalReminded {
        ok: true;
        reminded: number;
    }
    export {};
}
export {};
