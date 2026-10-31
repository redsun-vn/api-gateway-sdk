import { tags } from 'typia';
import { IMktOsAudience } from './imkt-os-audience';
type PositiveInt = number & tags.Type<'uint32'> & tags.Minimum<1>;
export declare namespace IMktOsRun {
    type Stage = 'context' | 'audience' | 'signal_digest' | 'brief' | 'plan' | 'content' | 'guard' | 'review' | 'execute' | 'measure';
    type UiStage = 'research' | 'insights' | 'creative' | 'plan' | 'create' | 'edit' | 'publish' | 'measure';
    type StepStatus = 'pending' | 'running' | 'awaiting_review' | 'approved' | 'rejected' | 'failed' | 'skipped';
    type RunStatus = 'composing' | 'needs_brand_profile' | 'failed' | 'awaiting_review' | 'confirmed';
    type JourneyTemplate = 'win_back' | 'nurture_new_lead' | 'quote_follow_up' | 'birthday' | 'periodic_reminder';
    type ArtifactType = 'SignalDigest' | 'CampaignBrief' | 'CampaignPlan' | 'EmailContent' | 'GuardReport';
    type CampaignStatus = 'draft' | 'awaiting_approval' | 'active' | 'paused' | 'completed' | 'stopped';
    type BudgetScope = 'shop_month' | 'run';
    type PauseReason = 'manual' | 'content_changed' | 'unsubscribe_rate' | 'approver_inactive' | 'budget' | 'package_expired' | 'crm_package_expired';
    type GoalMetric = 'lead_replied' | 'lead_to_opportunity' | 'opportunity_stage_changed' | 'opportunity_won' | 'customer_new_order' | 'revenue';
    type Channel = 'email' | 'sms' | 'zalo_oa' | 'zns' | 'sales_task' | 'crm_label';
    interface IHolder {
        type: 'ai' | 'staff';
        staff_id?: number | null;
    }
    interface IStep {
        stage: Stage;
        status: StepStatus;
        attempt: number;
        error: string | null;
        actor_type: 'ai' | 'staff' | null;
        actor_id: number | null;
        started_at: string | null;
        finished_at: string | null;
        approved_by: number | null;
        approved_at: string | null;
    }
    interface IArtifact {
        id: number;
        stage: Stage;
        type: ArtifactType;
        schema_version: number;
        version: number;
        author: 'ai' | 'user';
        author_id: number | null;
        content: Record<string, unknown>;
        created_at: string;
    }
    interface IRunDetail {
        id: number;
        name: string;
        target: IMktOsAudience.Target;
        audience_id: number;
        audience_name: string;
        audience_version_id: number;
        journey_template: JourneyTemplate | null;
        status: RunStatus;
        ui_stage: UiStage;
        holder: IHolder;
        campaign_id: number | null;
        created_by: number;
        created_at: string;
        updated_at: string;
        steps: IStep[];
        artifacts: IArtifact[];
    }
    interface ICreateRequest {
        audience_id: PositiveInt;
    }
    interface IRunSaved {
        ok: true;
        item: IRunDetail;
    }
    interface IGetResponse {
        item: IRunDetail;
    }
    interface IArtifactUpdateRequest {
        content: Record<string, unknown>;
        expected_version: number & tags.Type<'uint32'>;
    }
    interface IStepRetryRequest {
        journey_template?: JourneyTemplate;
    }
    type JourneySort = 'updated' | 'newest' | 'name';
    interface IJourneyListQuery {
        q?: string;
        status?: CampaignStatus;
        ui_stage?: UiStage;
        author_id?: PositiveInt;
        target?: IMktOsAudience.Target;
        sort?: JourneySort;
        page?: PositiveInt;
        page_size?: PositiveInt;
    }
    type StageState = 'pending' | 'running' | 'failed' | 'awaiting_review' | 'approved';
    interface IStageMini {
        ui_stage: UiStage;
        state: StageState;
    }
    interface IJourneySummary {
        run_id: number;
        campaign_id: number | null;
        name: string;
        target: IMktOsAudience.Target;
        audience_id: number;
        audience_name: string;
        status: CampaignStatus;
        ui_stage: UiStage;
        holder: IHolder;
        steps_mini: IStageMini[];
        pause_reason: PauseReason | null;
        budget_scope?: BudgetScope | null;
        paused_by: number | null;
        paused_by_name: string | null;
        progress?: IJourneyProgress | null;
        created_by: number;
        created_at: string;
        updated_at: string;
    }
    interface IJourneyProgress {
        entered: number;
        active: number;
        completed: number;
        exited: number;
        messages_sent: number;
    }
    interface IJourneyCounts {
        active: number;
        awaiting_approval: number;
        paused: number;
        draft: number;
    }
    interface IJourneyListResponse {
        items: IJourneySummary[];
        total: number;
        counts: IJourneyCounts;
    }
    interface IAudienceJourney {
        run_id: number;
        campaign_id: number | null;
        name: string;
        status: CampaignStatus;
        audience_version_id: number;
        on_old_version: boolean;
    }
    interface IAudienceJourneysResponse {
        items: IAudienceJourney[];
    }
    interface ICampaignVariant {
        id: number;
        channel: Channel;
        content_artifact_id: number | null;
        status: string;
        approved_version: number | null;
        content_hash: string | null;
    }
    interface ICampaignActivity {
        id: number;
        seq: number;
        trigger: 'start' | 'after_parent';
        delay_minutes: number;
        variants: ICampaignVariant[];
    }
    interface ICampaignZnsEstimate {
        messages: number;
        amount: number;
        unpriced_messages: number;
    }
    interface ICampaignMonthlyBudget {
        amount: number;
        spent: number;
        remaining: number;
        exceeded: boolean;
    }
    interface ICampaignCostEstimate {
        currency: 'VND';
        sms_messages: number;
        unit_price: number | null;
        missing_unit_price: boolean;
        amount: number | null;
        zns?: ICampaignZnsEstimate | null;
        total?: number;
        budget_cap: number | null;
        monthly_budget?: ICampaignMonthlyBudget | null;
    }
    interface ICampaignOwnerApproval {
        required: true;
        pending: number;
        approved: number;
        declined: number;
    }
    interface ICampaignDetail {
        id: number;
        run_id: number;
        name: string;
        status: CampaignStatus;
        target: IMktOsAudience.Target;
        audience_id: number;
        audience_version_id: number;
        goal_metric: GoalMetric | null;
        goal_target: number | null;
        brief: Record<string, unknown> | null;
        submit_seq: number;
        pending_submit_seq: number | null;
        content_hash: string;
        submitted_by: number | null;
        submitted_at: string | null;
        approved_by: number | null;
        approved_at: string | null;
        notified_staff_ids: number[];
        reminded_at: string | null;
        can_approve: boolean;
        first_send_at: string | null;
        participant_count: number;
        cost_estimate: ICampaignCostEstimate | null;
        owner_approval?: ICampaignOwnerApproval | null;
        pause_reason: PauseReason | null;
        budget_scope?: BudgetScope | null;
        paused_by: number | null;
        paused_by_name: string | null;
        can_pause: boolean;
        can_resume: boolean;
        can_stop: boolean;
        created_by: number;
        created_at: string;
        activities: ICampaignActivity[];
    }
    interface ICampaignGetResponse {
        item: ICampaignDetail;
    }
    interface ICampaignSaved {
        ok: true;
        item: ICampaignDetail;
    }
    interface ICampaignApproveRequest {
        content_hash: string & tags.MinLength<1>;
        submit_seq: (number & tags.Type<'uint32'>) | null;
    }
    interface ICampaignRemindResponse {
        ok: true;
        reminded_at: string;
    }
    type ICampaignDuplicated = IRunSaved;
}
export {};
