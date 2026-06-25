import { CrmSlaPriority } from '../../enum/crm-service/sla';
export declare namespace ICrmFacebook {
    type FbSyncSource = 'webhook' | 'polling' | 'retry';
    type FbSyncStatus = 'success' | 'failed' | 'skipped' | 'linked_existing' | 'skipped_conflict' | 'skipped_no_mapping' | 'auth_failed';
    interface IConnectPageRequest {
        page_id: string;
        access_token: string;
    }
    interface IUpdatePageTokenRequest {
        access_token: string;
    }
    interface ISaveMappingRequest {
        fb_form_id: string;
        field_mapping: Record<string, string>;
        default_owner_id?: number;
        pipeline_id?: number;
        default_branch_id?: number;
        default_sla_priority?: CrmSlaPriority;
    }
    interface ISyncLogQuery {
        status?: FbSyncStatus;
        source?: FbSyncSource;
        from?: string;
        to?: string;
        leadgen_id?: string;
        page?: number;
        limit?: number;
    }
    interface IFbPageConfigResponse {
        id: number | string;
        shop_id: number | string;
        fb_page_id: string;
        page_name: string | null;
        webhook_verified: boolean;
        is_active: boolean;
        token_expires_at: string | null;
        last_polled_at: string | null;
        created_at: Date | string;
    }
    interface IFbFormItem {
        id: string;
        name: string;
        status: string;
        created_time?: string;
    }
    interface IFbFormMappingResponse {
        id: number | string;
        page_config_id: number | string;
        fb_form_id: string;
        field_mapping: Record<string, string>;
        default_owner_id: number | string | null;
        default_branch_id: number | string | null;
        pipeline_id: number | string | null;
        default_sla_priority?: 'low' | 'medium' | 'high' | 'urgent' | null;
        is_active: boolean;
    }
    interface IFbSyncLogResponse {
        id: number | string;
        shop_id: number | string;
        page_config_id: number | string | null;
        fb_form_id: string | null;
        leadgen_id: string | null;
        source: FbSyncSource;
        status: FbSyncStatus;
        lead_id: number | string | null;
        duplicate_of_lead_id: number | string | null;
        error_message: string | null;
        raw_payload: Record<string, unknown> | null;
        created_at: Date | string;
    }
    interface IFbSyncLogListResponse {
        items: IFbSyncLogResponse[];
        total: number;
    }
    interface IFbPageResolution {
        shop_id: number | string;
        page_config_id: number | string;
    }
    interface IFbWebhookLeadgenPayload {
        shop_id: number | string;
        page_config_id: number | string;
        leadgen_id: string;
        source: FbSyncSource;
    }
    interface IFbWebhookChange {
        field: string;
        value: IFbWebhookChangeValue;
    }
    interface IFbWebhookChangeValue {
        page_id?: string;
        leadgen_id?: string;
        created_time?: number | string;
        form_id?: string;
        ad_id?: string;
        ad_group_id?: string;
    }
    interface IFbMessagingEvent {
        sender?: {
            id: string;
        };
        recipient?: {
            id: string;
        };
        timestamp?: number;
        message?: Record<string, unknown>;
        [key: string]: unknown;
    }
    interface IFbWebhookEntry {
        id: string;
        time?: number | string;
        changes?: IFbWebhookChange[];
        messaging?: IFbMessagingEvent[];
    }
    interface IFbLeadgenWebhookBody {
        object: string;
        entry: IFbWebhookEntry[];
    }
    interface IFbStartOAuthResponse {
        redirect_url: string;
    }
    interface IFbManagedPage {
        fb_page_id: string;
        page_name: string;
        connected: boolean;
    }
    interface IConnectManagedPagesRequest {
        page_ids: string[];
    }
    interface IConnectManagedPagesResponse {
        connected: string[];
        conflicts: string[];
        not_manageable: string[];
    }
    interface IFbOAuthStatusResponse {
        connected: boolean;
        expires_at: string | null;
        expiring_soon: boolean;
    }
}
