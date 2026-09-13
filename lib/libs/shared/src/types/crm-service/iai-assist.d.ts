export declare namespace ICrmAiAssist {
    type SuggestionKind = 'field_update' | 'task_create' | 'activity_update' | 'prefill';
    type SuggestionStatus = 'pending' | 'applying' | 'accepted' | 'rejected' | 'reverted' | 'expired' | 'failed';
    type RecordEntityType = 'lead' | 'opportunity';
    type Tier = 'suggestion' | 'generated' | 'rule';
    type RejectReason = 'wrong_value' | 'not_relevant' | 'already_done' | 'other';
    type GenerationState = 'ready' | 'generating' | 'not_enough_data' | 'unavailable';
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
    interface IAcceptBody {
        value?: SuggestionValue;
    }
    interface IRejectBody {
        reason?: RejectReason;
    }
    interface IPrefillCommitRef {
        suggestion_id: number | string;
        conversation_id: number | string;
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
    interface ISummaryResponse {
        state: GenerationState;
        tier: 'generated';
        summary?: ISummaryContent;
        citations?: ISummaryCitation[];
        generated_at?: Date | string;
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
    interface IConversationSummaryResponse {
        state: GenerationState;
        tier: 'generated';
        summary?: ISummaryContent;
        cited_message_ids?: Array<number | string>;
        generated_at?: Date | string;
    }
    interface IPrefillLeadResponse {
        state: GenerationState;
        tier: 'suggestion';
        suggestion_id?: number | string;
        fields?: Record<string, SuggestionValue>;
        evidence?: Record<string, string>;
    }
    interface IReplyDraftResponse {
        state: GenerationState;
        tier: 'generated';
        draft?: string;
        generated_at?: Date | string;
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
