export declare namespace IStringeeConfig {
    type Id = number | string;
    interface IHotlineInput {
        number: string;
        nickname?: string | null;
    }
    interface IAgentMapInput {
        staff_id: Id;
        stringee_user_id: string;
    }
    interface IUpsertRequest {
        region: string;
        api_host: string;
        icc_host: string;
        project_id: string;
        api_key_sid?: string | null;
        api_key_secret?: string | null;
        signing_secret?: string | null;
        revoke_previous?: boolean;
        hotlines: IHotlineInput[];
        agents: IAgentMapInput[];
        cti_enabled: boolean;
        transcription_enabled?: boolean;
        transcription_ack?: boolean;
        transcript_retention_days?: number;
        transcribe_min_talk_sec?: number;
    }
    interface IUpsertInput extends IUpsertRequest {
        shop_id: Id;
        staff_id: Id;
    }
    interface IFindOneInput {
        shop_id: Id;
    }
    interface IVerifyRequest {
        allow_overwrite?: boolean;
    }
    interface IVerifyInput extends IVerifyRequest {
        shop_id: Id;
        staff_id: Id;
    }
    interface IRotateTokenInput {
        shop_id: Id;
        staff_id: Id;
    }
    interface IHotline {
        id: Id;
        number: string;
        nickname: string | null;
        pcc_number_id: string | null;
        queue_id: string | null;
        allow_outbound: boolean | null;
        record_outbound: boolean | null;
    }
    interface IAgentMap {
        id: Id;
        staff_id: Id;
        stringee_user_id: string;
        pcc_agent_id: string | null;
        routing_type: string | null;
        allow_external_callout: boolean | null;
    }
    interface IPccQueue {
        queue_id: string;
        name: string;
        record_calls: boolean | null;
        wait_greeting_sid: string | null;
    }
    interface IPccGroup {
        group_id: string;
        name: string;
    }
    interface IPccGreeting {
        greeting_sid: string;
        name: string;
        desc: string | null;
    }
    interface IConfigResponse {
        id: Id;
        shop_id: Id;
        region: string;
        api_host: string;
        icc_host: string;
        project_id: string;
        api_key_sid_masked: string;
        api_key_secret_masked: string | null;
        signing_secret_masked: string | null;
        has_previous_signing_secret: boolean;
        has_webhook_token: boolean;
        webhook_token_hint: string | null;
        hotlines: IHotline[];
        agents: IAgentMap[];
        queues: IPccQueue[];
        groups: IPccGroup[];
        greetings: IPccGreeting[];
        cti_enabled: boolean;
        transcription_enabled: boolean;
        transcript_retention_days: number;
        transcribe_min_talk_sec: number;
        ai_assist_enabled: boolean;
        last_verified_at: Date | string | null;
        callsettings_synced_at: Date | string | null;
        callout_synced_at: Date | string | null;
        updated_at: Date | string;
    }
    interface IWebhookUrls {
        event_url: string;
        callout_answer_url: string;
    }
    type VerifyWarningCode = 'QUEUE_RECORD_OFF' | 'NUMBER_RECORD_OUTBOUND_OFF' | 'HOTLINE_NOT_IN_PCC' | 'AGENT_NOT_IN_PCC' | 'RESOURCE_SYNC_FAILED';
    interface IVerifyWarning {
        code: VerifyWarningCode;
        ref: string | null;
    }
    interface IVerifyResponse {
        status: 'verified' | 'needs_overwrite_confirm';
        callsettings: 'unchanged' | 'synced' | 'skipped';
        current_callsettings: {
            event_url: string | null;
            callout_answer_url: string | null;
        } | null;
        webhook_urls: IWebhookUrls | null;
        warnings: IVerifyWarning[];
        config: IConfigResponse;
    }
    interface IRotateTokenResponse {
        webhook_urls: IWebhookUrls;
        callsettings: 'synced' | 'skipped';
        config: IConfigResponse;
    }
}
