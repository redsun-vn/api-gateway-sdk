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
        } | null;
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
        };
        total: number;
    }
    interface INextStepCondition {
        field: string;
        op: string;
        value: string[];
    }
    interface IResultNextStep {
        received_not_replied: number;
        audience: {
            target: 'lead';
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
            type: 'lead';
            id: number;
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
    interface IRecordMarketing {
        type: 'lead';
        record: IMarketingLead;
        journeys: IMarketingJourney[];
        signals: IMarketingSignal[];
    }
}
export {};
