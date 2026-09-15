import { tags } from 'typia';
export declare namespace ICrmAiAssist {
    type SuggestionKind = 'field_update' | 'task_create' | 'activity_update' | 'prefill';
    type SuggestionStatus = 'pending' | 'applying' | 'accepted' | 'rejected' | 'reverted' | 'expired' | 'failed';
    type RecordEntityType = 'lead' | 'opportunity';
    type Tier = 'suggestion' | 'generated' | 'rule';
    type RejectReason = 'wrong_value' | 'not_relevant' | 'already_done' | 'other';
    type GenerationState = 'ready' | 'generating' | 'not_enough_data' | 'unavailable';
    type SummaryUnavailableReason = 'daily_limit' | 'budget_limit' | 'failed' | 'busy';
    type SummaryBasis = 'activities' | 'record_facts';
    type StarterMissingSlot = 'budget' | 'authority' | 'need' | 'timeline';
    type SuggestionValue = string | number | boolean | string[] | null;
    interface IViewerScope {
        all: boolean;
        staff_ids: Array<number | string>;
    }
    interface IRecordPayload {
        shop_id: number;
        staff_id: number;
        entity_type: RecordEntityType;
        entity_id: number;
        viewer_scope: IViewerScope;
    }
    interface IDecisionPayload extends IRecordPayload {
        suggestion_id: number;
        value?: SuggestionValue;
        reason?: RejectReason;
    }
    interface IConversationPayload {
        shop_id: number;
        staff_id: number;
        conversation_id: number;
        viewer_scope: IViewerScope;
    }
    interface IContactCandidatesPayload extends IConversationPayload {
        scoped_owner_ids?: number[];
    }
    interface IAcceptBody {
        value?: SuggestionValue;
    }
    interface IRejectBody {
        reason?: RejectReason;
    }
    interface IPrefillCommitRef {
        suggestion_id: (number & tags.Type<'uint64'> & tags.Minimum<1>) | (string & tags.Pattern<'^[1-9][0-9]*$'>);
        conversation_id: (number & tags.Type<'uint64'> & tags.Minimum<1>) | (string & tags.Pattern<'^[1-9][0-9]*$'>);
    }
    interface ISummaryContent {
        need: string;
        done: string;
        blocker: string;
        next_step: string;
    }
    interface ISummaryCitation {
        activity_id: number | string;
        type: string;
        subject: string;
        occurred_at: Date | string | null;
    }
    interface ISummaryNextStepTask {
        id: number | string;
        subject: string;
        due_at: Date | string;
    }
    interface IPreviousSummary {
        summary: ISummaryContent;
        citations: ISummaryCitation[];
        generated_at: Date | string;
        basis: SummaryBasis;
        next_step_task?: ISummaryNextStepTask;
    }
    interface ISummaryStarter {
        tier: 'rule';
        known_facts: Array<{
            label: string;
            value: string;
        }>;
        activities_with_body: number;
        received_at: Date | string | null;
        first_contact_at: Date | string | null;
        first_contact_sla: {
            status: 'on_time' | 'warning' | 'breached';
            remaining_business_minutes: number;
        } | null;
        missing: StarterMissingSlot[] | null;
        next_step: {
            kind: 'first_contact' | 'template' | 'open_task';
            subject: string;
            due_at: Date | string;
            task_id?: number | string;
        };
    }
    interface ISummaryResponse {
        state: GenerationState;
        tier: 'generated';
        summary?: ISummaryContent;
        citations?: ISummaryCitation[];
        generated_at?: Date | string;
        next_step_task?: ISummaryNextStepTask;
        reason?: SummaryUnavailableReason;
        previous?: IPreviousSummary;
        basis?: SummaryBasis;
        starter?: ISummaryStarter;
    }
    interface ISuggestionItem {
        id: number | string;
        kind: SuggestionKind;
        status: SuggestionStatus;
        tier: Tier;
        field_key: string | null;
        field_label: string | null;
        current_value: SuggestionValue;
        proposed_value: SuggestionValue;
        applied_before: SuggestionValue;
        evidence: string | null;
        subject: string | null;
        due_at: Date | string | null;
        requires_row_confirmation: boolean;
        may_auto_qualify: boolean;
        can_revert: boolean;
        source_activity_id: number | string | null;
        created_at: Date | string;
        decided_at: Date | string | null;
    }
    interface IFindSuggestionsResponse {
        items: ISuggestionItem[];
    }
    interface IDecisionResponse {
        item: ISuggestionItem;
    }
    type ConversationUnavailableReason = SummaryUnavailableReason | 'window_expired';
    interface IConversationSummaryResponse {
        state: GenerationState;
        tier: 'generated';
        summary?: ISummaryContent;
        cited_message_ids?: Array<number | string>;
        generated_at?: Date | string;
        reason?: ConversationUnavailableReason;
    }
    interface IPrefillLeadResponse {
        state: GenerationState;
        tier: 'suggestion';
        suggestion_id?: number | string;
        fields?: Record<string, SuggestionValue>;
        evidence?: Record<string, string>;
        reason?: ConversationUnavailableReason;
    }
    interface IReplyDraftResponse {
        state: GenerationState;
        tier: 'generated';
        draft?: string;
        generated_at?: Date | string;
        reason?: ConversationUnavailableReason;
    }
    type ContactCandidateMatch = 'conversation_phone' | 'extracted_phone' | 'extracted_email' | 'linked_lead_email' | 'suggested_phone' | 'suggested_email';
    interface IContactCandidate {
        lead_id: number | string;
        name: string | null;
        status: string;
        owner_id: number | null;
        match: ContactCandidateMatch;
        linked: boolean;
    }
    interface IContactCandidatesResponse {
        candidates: IContactCandidate[];
    }
}
export declare namespace ICrmAiProfile {
    type PromptKey = 'extract' | 'summary' | 'next_step' | 'conversation_summary' | 'reply_draft' | 'buying_signal';
    interface IFieldHint {
        description: string;
        synonyms: string[];
    }
    interface INextStepTemplate {
        subject: string;
        due_in_hours: number;
    }
    interface IGoldenSample {
        input: string;
        expected: {
            suggestions?: Array<{
                kind: string;
                field_key?: string;
                value: ICrmAiAssist.SuggestionValue;
            }>;
            summary_contains?: string[];
        };
        seeded_pii: string[];
        source: 'synthetic' | 'prod';
    }
    interface IProfile {
        prompt_version: string;
        prompts: Record<PromptKey, string>;
        field_hints: Record<string, IFieldHint>;
        sensitive_fields: string[];
        disabled_fields: string[];
        next_step_templates: Record<string, INextStepTemplate>;
        summary_min_signals: {
            activities_with_body: number;
            messages: number;
        };
        few_shot_examples: Array<{
            prompt: PromptKey;
            input: string;
            output: string;
        }>;
        golden_samples: IGoldenSample[];
    }
    interface IFindResponse {
        profile: IProfile;
        shop_patch: Partial<IProfile>;
        template_profile_present: boolean;
    }
}
