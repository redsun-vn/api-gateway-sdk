import { tags } from 'typia';
import { ISubscription } from '../isubscription';
type PositiveInt = number & tags.Type<'uint32'> & tags.Minimum<1>;
export declare namespace IMktOs {
    export interface IEntitlementResponse {
        controllers: string[];
        has_crm_package: boolean;
        mkt_os: ISubscription.IControllerEntitlement;
        crm_package: ISubscription.IControllerEntitlement;
    }
    export interface IFieldError {
        field: string;
        message: string;
        code?: string;
    }
    export interface IFieldErrorsResult {
        ok: false;
        errors: IFieldError[];
    }
    export interface ISettings {
        zns_cap_per_day: number;
        total_cap_per_24h: number;
        exclude_sales_activity_days: number;
        attribution_window_days: number;
        sms_unit_price: number | null;
        unsubscribe_pause_min_sent: number;
        suggest_lead_inquiry_days: number;
        suggest_opp_quote_days: number;
        suggest_opp_no_contact_days: number;
        suggest_customer_inactive_days: number;
        monthly_budget: number | null;
        holdout_pct?: number;
        market_research_enabled?: boolean;
        link_tracking_enabled?: boolean;
        utm_tagging_enabled?: boolean;
        pixel_facebook_id?: string | null;
        pixel_ga4_id?: string | null;
        pixel_tiktok_id?: string | null;
        privacy_policy_url?: string | null;
    }
    type PixelIdInput = string & tags.Pattern<'^[A-Za-z0-9 -]*$'> & tags.MaxLength<40>;
    export interface ISettingsResponse {
        settings: ISettings;
        saved_at: string | null;
        saved_by: number | null;
        defaults?: ISettings;
        monthly_spent?: number;
        spent_month?: string;
        email_layout?: ISettingsEmailLayout | null;
    }
    export interface ISettingsEmailLayout {
        id: number;
        name: string | null;
    }
    export interface ISettingsUpdateData {
        zns_cap_per_day?: number;
        total_cap_per_24h?: number;
        exclude_sales_activity_days?: number;
        attribution_window_days?: number;
        sms_unit_price?: number | null;
        unsubscribe_pause_min_sent?: number;
        suggest_lead_inquiry_days?: number;
        suggest_opp_quote_days?: number;
        suggest_opp_no_contact_days?: number;
        suggest_customer_inactive_days?: number;
        monthly_budget?: number | null;
        holdout_pct?: number;
        market_research_enabled?: boolean;
        email_layout_template_id?: PositiveInt | null;
        link_tracking_enabled?: boolean;
        utm_tagging_enabled?: boolean;
        pixel_facebook_id?: PixelIdInput | null;
        pixel_ga4_id?: PixelIdInput | null;
        pixel_tiktok_id?: PixelIdInput | null;
        privacy_policy_url?: (string & tags.MaxLength<500>) | null;
    }
    export interface ISettingsUpdateRequest {
        data: ISettingsUpdateData;
    }
    export interface ISettingsSaved {
        ok: true;
        settings: ISettings;
        saved_at: string | null;
        saved_by: number | null;
        email_layout?: ISettingsEmailLayout | null;
    }
    export interface IEmailLayout {
        id: number;
        name: string;
        updated_at: string | null;
        hash: string;
    }
    export interface IEmailLayoutsResponse {
        items: IEmailLayout[];
    }
    export interface IChannelReadiness {
        ready: boolean;
        reason: string | null;
    }
    export interface IZnsReadiness extends IChannelReadiness {
        disabled_by_shop?: boolean;
    }
    export interface IChannelReadinessResponse {
        email: IChannelReadiness;
        sms: IChannelReadiness;
        zalo_oa: IChannelReadiness;
        zns: IZnsReadiness;
    }
    export type BrandProfileSource = 'ai_hub' | 'mkt_os';
    export interface IBrandProfileAudience {
        name?: string | null;
        description?: string | null;
        need?: string | null;
    }
    export interface IBrandProfileFields {
        schema_version?: number;
        description?: string | null;
        service_area?: string | null;
        positioning?: string | null;
        differentiators?: string[] | null;
        key_offerings?: string[] | null;
        audiences?: IBrandProfileAudience[] | null;
        address_customer?: string | null;
        self_reference?: string | null;
        use_emoji?: boolean | null;
        sample_sentences?: string[] | null;
        banned_claims?: string[] | null;
        preferred_cta?: string | null;
        signature?: string | null;
        industry_notes?: string[] | null;
    }
    export interface IBrandProfileData {
        brand_name: string | null;
        default_tone: string | null;
        forbidden_words: string[] | null;
        profile: IBrandProfileFields | null;
    }
    export interface IBrandProfileDataInput {
        brand_name?: string | null;
        default_tone?: string | null;
        forbidden_words?: string[] | null;
        profile?: IBrandProfileFields | null;
    }
    export interface IBrandProfileDraft {
        data: IBrandProfileDataInput;
        saved_at: string;
        created_by: number | null;
    }
    export interface IBrandProfileQuery {
        version?: PositiveInt;
        brand_voice_id?: PositiveInt;
    }
    export interface IBrandProfileResponse {
        brand_voice_id: number | null;
        version: number | null;
        saved_at: string | null;
        source: BrandProfileSource | null;
        created_by: number | null;
        data: IBrandProfileData | null;
        draft: IBrandProfileDraft | null;
        mkt_ready: boolean;
        missing_fields: string[];
    }
    export interface IBrandProfileVersionsQuery {
        brand_voice_id?: PositiveInt;
        page?: PositiveInt;
        page_size?: PositiveInt;
    }
    export interface IBrandProfileVersionItem {
        version: number;
        source: BrandProfileSource;
        created_by: number | null;
        created_at: string;
    }
    export interface IBrandProfileVersionsResponse {
        items: IBrandProfileVersionItem[];
        total: number;
    }
    export interface IBrandProfileExamples {
        schema_version?: number;
        field_examples?: Record<string, string[]>;
        industry_notes?: string[];
        tone_hints?: Record<string, unknown>;
    }
    export interface IBrandProfileExamplesResponse {
        source: 'business_type' | 'category' | 'generic';
        examples: IBrandProfileExamples;
    }
    export interface IBrandProfileDraftRequest {
        data: IBrandProfileDataInput;
    }
    export interface IBrandProfileDraftSaved {
        ok: true;
        saved_at: string;
    }
    export interface IBrandProfileDraftDeleteQuery {
        brand_voice_id?: PositiveInt;
    }
    export interface IBrandProfileDraftDeleted {
        ok: true;
        deleted: boolean;
    }
    export interface IBrandProfileSaveRequest {
        data: IBrandProfileDataInput;
        request_id: string & tags.MinLength<1> & tags.MaxLength<64>;
    }
    export interface IBrandProfileSaved {
        ok: true;
        brand_voice_id: number;
        version: number;
    }
    export type UnsubscribeChannel = 'email' | 'sms';
    export type UnsubscribeMethod = 'email_link' | 'one_click' | 'staff_manual';
    export interface IUnsubscribesQuery {
        channel: UnsubscribeChannel;
        method?: UnsubscribeMethod;
        q?: string;
        page?: PositiveInt;
        page_size?: PositiveInt;
    }
    export interface IUnsubscribeItem {
        channel: UnsubscribeChannel;
        recipient_type: 'lead' | 'partner' | 'subscriber';
        recipient_ref: string;
        display_name: string | null;
        method: UnsubscribeMethod | null;
        reason: string | null;
        campaign_id: number | null;
        campaign_name: string | null;
        recorded_by: number | null;
        recorded_by_name: string | null;
        contact_masked?: string | null;
        created_at: string;
    }
    export interface IUnsubscribesResponse {
        items: IUnsubscribeItem[];
        total: number;
    }
    export type CompetitorStatus = 'suggested' | 'confirmed' | 'dropped';
    export interface ICompetitorsQuery {
        status?: CompetitorStatus;
    }
    export interface ICompetitor {
        id: number;
        name: string;
        website: string | null;
        fanpage: string | null;
        source: string;
        status: CompetitorStatus;
        created_at: string;
        updated_at: string;
    }
    export interface ICompetitorsResponse {
        items: ICompetitor[];
    }
    export interface ICompetitorManualCreateRequest {
        name: string;
        website?: string | null;
        fanpage?: string | null;
    }
    export interface ICompetitorConfirmSuggestionRequest {
        suggestion_id: PositiveInt;
    }
    export type ICompetitorCreateRequest = ICompetitorManualCreateRequest | ICompetitorConfirmSuggestionRequest;
    export interface ICompetitorUpdateRequest {
        name?: string;
        website?: string | null;
        fanpage?: string | null;
        status?: 'confirmed' | 'dropped';
    }
    export interface ICompetitorSaved {
        ok: true;
        item: ICompetitor;
    }
    export type MarketDigestStatus = 'off' | 'ready' | 'stale' | 'pending' | 'provider_error' | 'empty';
    export interface IMarketDigestSource {
        url: string;
        source_name: string;
        published_at: string;
    }
    export interface IMarketDigestItem {
        type: 'competitor' | 'market';
        title: string;
        summary: string;
        fits: string;
        sources: IMarketDigestSource[];
    }
    export interface ICompetitorSuggestionOutcome {
        status: 'suggested' | 'skipped' | 'failed';
        reason: null | 'missing_service_area' | 'missing_industry' | 'no_places' | 'provider_error' | 'ai_error' | 'not_configured';
        count: number;
    }
    export interface IMarketDigest {
        enabled: boolean;
        configured: boolean;
        status: MarketDigestStatus;
        digest_date: string | null;
        items: IMarketDigestItem[];
        updated_at: string | null;
        refreshed_today: boolean;
        can_refresh: boolean;
        competitor_suggestion: ICompetitorSuggestionOutcome | null;
    }
    export interface IMarketDigestRefreshed {
        ok: true;
        digest: IMarketDigest;
    }
    export type MarketDigestRefreshRefusal = 'already_refreshed' | 'disabled' | 'not_configured' | 'package_inactive';
    export {};
}
export {};
