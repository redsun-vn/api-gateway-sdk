import { tags } from 'typia';
import { ISubscription } from '../isubscription';
type PositiveInt = number & tags.Type<'uint32'> & tags.Minimum<1>;
export declare namespace IMktOs {
    interface IEntitlementResponse {
        mkt_os: ISubscription.IControllerEntitlement;
        crm_package: ISubscription.IControllerEntitlement;
        has_crm_package: boolean;
    }
    interface IFieldError {
        field: string;
        message: string;
    }
    interface IFieldErrorsResult {
        ok: false;
        errors: IFieldError[];
    }
    interface ISettings {
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
    }
    interface ISettingsResponse {
        settings: ISettings;
        saved_at: string | null;
        saved_by: number | null;
        defaults?: ISettings;
        monthly_spent?: number;
        spent_month?: string;
    }
    interface ISettingsUpdateData {
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
    }
    interface ISettingsUpdateRequest {
        data: ISettingsUpdateData;
    }
    interface ISettingsSaved {
        ok: true;
        settings: ISettings;
        saved_at: string | null;
        saved_by: number | null;
    }
    interface IChannelReadiness {
        ready: boolean;
        reason: string | null;
    }
    interface IZnsReadiness extends IChannelReadiness {
        disabled_by_shop?: boolean;
    }
    interface IChannelReadinessResponse {
        email: IChannelReadiness;
        sms: IChannelReadiness;
        zalo_oa: IChannelReadiness;
        zns: IZnsReadiness;
    }
    type BrandProfileSource = 'ai_hub' | 'mkt_os';
    interface IBrandProfileAudience {
        name?: string | null;
        description?: string | null;
        need?: string | null;
    }
    interface IBrandProfileFields {
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
    interface IBrandProfileData {
        brand_name: string | null;
        default_tone: string | null;
        forbidden_words: string[] | null;
        profile: IBrandProfileFields | null;
    }
    interface IBrandProfileDataInput {
        brand_name?: string | null;
        default_tone?: string | null;
        forbidden_words?: string[] | null;
        profile?: IBrandProfileFields | null;
    }
    interface IBrandProfileDraft {
        data: IBrandProfileDataInput;
        saved_at: string;
        created_by: number | null;
    }
    interface IBrandProfileQuery {
        version?: PositiveInt;
        brand_voice_id?: PositiveInt;
    }
    interface IBrandProfileResponse {
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
    interface IBrandProfileVersionsQuery {
        brand_voice_id?: PositiveInt;
        page?: PositiveInt;
        page_size?: PositiveInt;
    }
    interface IBrandProfileVersionItem {
        version: number;
        source: BrandProfileSource;
        created_by: number | null;
        created_at: string;
    }
    interface IBrandProfileVersionsResponse {
        items: IBrandProfileVersionItem[];
        total: number;
    }
    interface IBrandProfileExamples {
        schema_version?: number;
        field_examples?: Record<string, string[]>;
        industry_notes?: string[];
        tone_hints?: Record<string, unknown>;
    }
    interface IBrandProfileExamplesResponse {
        source: 'business_type' | 'category' | 'generic';
        examples: IBrandProfileExamples;
    }
    interface IBrandProfileDraftRequest {
        data: IBrandProfileDataInput;
    }
    interface IBrandProfileDraftSaved {
        ok: true;
        saved_at: string;
    }
    interface IBrandProfileDraftDeleteQuery {
        brand_voice_id?: PositiveInt;
    }
    interface IBrandProfileDraftDeleted {
        ok: true;
        deleted: boolean;
    }
    interface IBrandProfileSaveRequest {
        data: IBrandProfileDataInput;
        request_id: string & tags.MinLength<1> & tags.MaxLength<64>;
    }
    interface IBrandProfileSaved {
        ok: true;
        brand_voice_id: number;
        version: number;
    }
    type UnsubscribeChannel = 'email' | 'sms';
    type UnsubscribeMethod = 'email_link' | 'one_click' | 'staff_manual';
    interface IUnsubscribesQuery {
        channel: UnsubscribeChannel;
        method?: UnsubscribeMethod;
        q?: string;
        page?: PositiveInt;
        page_size?: PositiveInt;
    }
    interface IUnsubscribeItem {
        channel: UnsubscribeChannel;
        recipient_type: 'lead' | 'partner';
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
    interface IUnsubscribesResponse {
        items: IUnsubscribeItem[];
        total: number;
    }
    type CompetitorStatus = 'suggested' | 'confirmed' | 'dropped';
    interface ICompetitorsQuery {
        status?: CompetitorStatus;
    }
    interface ICompetitor {
        id: number;
        name: string;
        website: string | null;
        fanpage: string | null;
        source: string;
        status: CompetitorStatus;
        created_at: string;
        updated_at: string;
    }
    interface ICompetitorsResponse {
        items: ICompetitor[];
    }
    interface ICompetitorCreateRequest {
        name: string;
        website?: string | null;
        fanpage?: string | null;
    }
    interface ICompetitorUpdateRequest {
        name?: string;
        website?: string | null;
        fanpage?: string | null;
        status?: 'confirmed' | 'dropped';
    }
    interface ICompetitorSaved {
        ok: true;
        item: ICompetitor;
    }
}
export {};
