import { tags } from 'typia';
type PositiveInt = number & tags.Type<'uint32'> & tags.Minimum<1>;
type Id = number | string;
type Reason = string & tags.Pattern<'^[a-z_]{1,48}$'>;
export declare namespace IMktOsResults {
    type ParticipantStatus = 'waiting' | 'sent' | 'replied' | 'returned' | 'skipped' | 'failed' | 'exited';
    type ActivityType = 'send' | 'reply' | 'order' | 'user_change' | 'system';
    interface IHeadline {
        key: 'reached' | 'replied' | 'returned';
        value: number;
        rate: number | null;
        filter: {
            status: 'sent' | 'replied' | 'returned';
        };
    }
    interface ITiers {
        enrolled: number;
        sent: {
            reached: number;
            sends: number;
        };
        engagement: {
            replied: number;
            reply_rate: number | null;
            unsubscribed: number;
            unsubscribe_rate: number | null;
        };
        conversion: {
            returned: number;
            converted: number;
            conversion_rate: number | null;
            opportunities: number;
            opportunity_rate: number | null;
        };
        comparison: {
            journeys: number;
            reply_rate: number | null;
            opportunity_rate: number | null;
            won_rate?: number | null;
        } | null;
        opportunity?: IOpportunityTier | null;
        customer?: ICustomerTier | null;
    }
    interface IOpportunityTier {
        stage_changed: number;
        stage_changed_rate: number | null;
        won: number;
        won_rate: number | null;
        won_value: number;
    }
    interface ICustomerTier {
        new_order_customers: number;
        new_order_rate: number | null;
        orders: number;
        revenue: number;
    }
    interface IAttribution {
        direct: {
            conversions: number;
            value: number;
        };
        time_window: {
            orders: number;
            customers: number;
            value: number;
            window_days: number;
        };
    }
    interface ITarget {
        metric: string | null;
        target: number | null;
        actual: number | null;
        progress: number | null;
    }
    interface IStepFunnel {
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
    interface IResultCost {
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
    interface INextStepCondition {
        field: string;
        op: string;
        value: string[];
    }
    interface IResultNextStep {
        received_not_replied: number;
        received_not_returned?: number;
        audience: {
            target: 'lead' | 'opportunity' | 'customer';
            name: string;
            filter: {
                all: INextStepCondition[];
            };
        };
    }
    interface ILeadSourceRow {
        source: string;
        enrolled: number;
        reached: number;
        replied: number;
        opportunities: number;
        reply_rate: number | null;
        opportunity_rate: number | null;
    }
    interface IResultReport {
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
    }
    interface IParticipantListQuery {
        status?: ParticipantStatus;
        step?: PositiveInt;
        reason?: Reason;
        q?: string & tags.MaxLength<100>;
        page?: PositiveInt;
    }
    interface IParticipantRow {
        id: number;
        name: string | null;
        has_email: boolean;
        status: ParticipantStatus;
        status_reason: string | null;
        step_seq: number | null;
        enrolled_at: string;
        exited_at: string | null;
        replied_at: string | null;
        last_sent_at: string | null;
    }
    interface IParticipantPage {
        items: IParticipantRow[];
        total: number;
        page: number;
        page_size: number;
    }
    type TimelineEventType = 'enrolled' | 'scheduled' | 'deferred' | 'skipped' | 'sent' | 'failed' | 'replied' | 'converted' | 'exited' | 'task_created' | 'labeled';
    interface ITimelineEvent {
        at: string;
        type: TimelineEventType;
        step_seq: number | null;
        reason: string | null;
        assignee_name?: string | null;
    }
    interface IParticipantDetail {
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
    interface IParticipantExitRequest {
        reason: string & tags.MinLength<1> & tags.MaxLength<200>;
    }
    interface IParticipantExitResponse {
        ok: true;
        item: IParticipantRow;
    }
    interface IActivityQuery {
        type?: ActivityType;
        page?: PositiveInt;
    }
    interface IActivityActor {
        kind: 'ai' | 'staff' | 'system';
        staff_id: number | null;
        name: string;
    }
    interface IActivityItem {
        at: string;
        type: ActivityType;
        code: string;
        actor: IActivityActor;
        text: string;
        participant_id: number | null;
    }
    interface IActivityPage {
        items: IActivityItem[];
        total: number;
        page: number;
        page_size: number;
    }
    interface IMarketingLead {
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
    interface IMarketingJourney {
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
    }
    interface IMarketingSignal {
        signal_type: string;
        intent_type: string;
        topic_ref: string | null;
        strength: number;
        observed_at: string | null;
        expires_at: string | null;
    }
    type UnsubscribeRecordType = 'lead' | 'customer';
    interface IRecordUnsubscribeRequest {
        channel: 'sms';
        reason?: string & tags.MaxLength<300>;
    }
    interface IRecordUnsubscribeResponse {
        ok: true;
        created: boolean;
    }
    interface IMarketingCustomer {
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
    interface IMarketingTask {
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
    interface IRecordMarketing {
        type: 'lead' | 'customer';
        record: IMarketingLead | IMarketingCustomer;
        journeys: IMarketingJourney[];
        signals: IMarketingSignal[];
        tasks?: IMarketingTask[];
    }
    type ApprovalStatus = 'pending' | 'approved' | 'declined';
    interface IApprovalListQuery {
        view?: 'mine' | 'progress';
        campaign_id?: PositiveInt;
        opportunity_id?: PositiveInt;
        status?: ApprovalStatus;
        page?: PositiveInt;
    }
    interface IApprovalItem {
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
    interface IApprovalProgress {
        owner_id: number | null;
        owner_name: string | null;
        pending: number;
        approved: number;
        declined: number;
    }
    interface IApprovalPage {
        items: IApprovalItem[];
        total: number;
        page: number;
        page_size: number;
        progress: IApprovalProgress[] | null;
    }
    interface IApprovalGetQuery {
        campaign_id: PositiveInt;
    }
    interface IApprovalMessage {
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
    interface IApprovalDetail extends IApprovalItem {
        messages: IApprovalMessage[];
    }
    interface IApprovalDecideRequest {
        campaign_id: PositiveInt;
        opportunity_ids?: Array<PositiveInt> & tags.MinItems<1> & tags.MaxItems<100>;
        decision: 'approve' | 'decline';
        reason?: string & tags.MaxLength<300>;
    }
    interface IApprovalDecided {
        ok: true;
        items: IApprovalItem[];
    }
    interface IApprovalRemindRequest {
        campaign_id: PositiveInt;
        owner_id?: PositiveInt;
    }
    interface IApprovalReminded {
        ok: true;
        reminded: number;
    }
}
export {};
